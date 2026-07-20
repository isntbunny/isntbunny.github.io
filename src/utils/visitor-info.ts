// 访客地理位置和欢迎语

interface VisitorLocation {
  country: string
  countryCode: string
  region: string
  city: string
  isp: string
  timezone: string
  ip: string
  fromBrowser?: boolean
}

interface WelcomeMessage {
  greeting: string
  extra: string
}

interface IPInfo {
  ip: string
  ipType: string
  isp: string
}

// ===== 访客地理位置 =====
async function getVisitorLocation(): Promise<VisitorLocation | null> {
  try {
    const response = await fetch(
      'https://ip-api.com/json/?fields=status,country,countryCode,regionName,city,isp,timezone,query',
      { signal: AbortSignal.timeout(5000) }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (data.status === 'success') {
      return {
        country: data.country,
        countryCode: data.countryCode,
        region: data.regionName,
        city: data.city,
        isp: data.isp,
        timezone: data.timezone,
        ip: data.query,
      }
    } else {
      return null
    }
  } catch (error) {
    console.warn('获取位置信息失败，将使用默认欢迎语:', (error as Error).message)
    return null
  }
}

// ===== 使用浏览器 navigator 获取语言和时区信息 =====
function getBrowserInfo() {
  return {
    language: navigator.language || '未知语言',
    languages: navigator.languages || [],
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '未知时区',
    platform: navigator.platform || '未知平台',
  }
}

// ===== 基于浏览器信息获取位置（备用方案） =====
function getLocationFromBrowser(): VisitorLocation {
  const browserInfo = getBrowserInfo()
  const lang = browserInfo.language

  const langMap: Record<string, { code: string; name: string }> = {
    'zh-CN': { code: 'CN', name: '中国' },
    'zh-TW': { code: 'TW', name: '台湾' },
    'zh-HK': { code: 'HK', name: '香港' },
    zh: { code: 'CN', name: '中国' },
    'en-US': { code: 'US', name: '美国' },
    'en-GB': { code: 'GB', name: '英国' },
    en: { code: 'US', name: '美国' },
    ja: { code: 'JP', name: '日本' },
    ko: { code: 'KR', name: '韩国' },
    fr: { code: 'FR', name: '法国' },
    de: { code: 'DE', name: '德国' },
    es: { code: 'ES', name: '西班牙' },
    it: { code: 'IT', name: '意大利' },
    ru: { code: 'RU', name: '俄罗斯' },
    pt: { code: 'PT', name: '葡萄牙' },
    ar: { code: 'SA', name: '沙特阿拉伯' },
    hi: { code: 'IN', name: '印度' },
  }

  let countryCode = 'UNKNOWN'
  let country = '未知地区'

  for (const [key, value] of Object.entries(langMap)) {
    if (lang.startsWith(key)) {
      countryCode = value.code
      country = value.name
      break
    }
  }

  return {
    country,
    countryCode,
    region: '',
    city: '',
    isp: '未知运营商',
    timezone: browserInfo.timezone,
    ip: '无法获取',
    fromBrowser: true,
  }
}

// ===== 根据地区生成欢迎语 =====
function getWelcomeMessage(location: VisitorLocation, fromBrowser = false): WelcomeMessage {
  if (fromBrowser) {
    return {
      greeting: `你好呀，来自${location.country}的朋友。`,
      extra: `你使用的是 ${getBrowserInfo().language} 系统，时区为 ${location.timezone}。海内存知己，天涯若比邻。世界很大，互联网让我们相遇，很高兴遇见你。`,
    }
  }

  const { country, countryCode, region, city } = location
  const isChina = countryCode === 'CN'

  let greeting = ''
  let extra = ''

  if (isChina) {
    const locationStr = city && region ? `${region}${city}` : region || city || country
    greeting = `你好呀，来自${locationStr}的朋友。`

    const cityGreetings: Record<string, string> = {
      北京: '皇城根儿下，离挺近。说起来bunny很喜欢吃北京烤鸭......想尝尝北京的其他美食捏！（豆汁除外）',
      上海: 'wow，bunny有点好奇魔都的生活怎么样呢。',
      广州: '早茶喝了吗？（虽然现在不一定是早上）',
      深圳: '听说是很现代的地方捏，bunny也想去深圳看看。',
      杭州: '上有天堂下有苏杭——',
      成都: '或者是——来自天府之国的朋友。成都有什么好玩的地方吗？',
      重庆: '山城的朋友！bunny觉得你们那边的火锅很好吃捏。',
      武汉: '刚连上网，武汉加油，中国加油！（bushi）',
      南京: `bunny也想去${city}看看捏。`,
      西安: `bunny也想去${city}看看捏。`,
      青岛: '青岛啤酒蛤蜊海鲜😋',
      厦门: 'bunny记得厦门有个鼓浪屿来着（）',
      昆明: '春城昆明，四季如春~',
      沈阳: 'bunny很喜欢看你们那边的小品。',
      哈尔滨: '冰雪大世界',
      香港: `用正體字給你打個招呼：D 說起來bunny也想去${city}看看捏。`,
      澳门: `用正體字給你打個招呼：D 說起來bunny也想去${city}看看捏。`,
      台湾: `用正體字給你打個招呼：D 說起來bunny也想去${city}看看捏。`,
    }

    let matched = false
    for (const [key, value] of Object.entries(cityGreetings)) {
      if ((city && city.includes(key)) || (region && region.includes(key))) {
        extra = value
        matched = true
        break
      }
    }

    if (!matched) {
      const provinceGreetings: Record<string, string> = {
        河北: '这么近，那么美，看来你和bunny在同一个省份捏。老乡QAQ',
        河南: '俺是河南嘞🎶河南洛阳嘞🎶',
        山东: '好客山东欢迎您——',
        山西: '山西！醋和面食的天堂！bunny也喜欢吃！',
        陕西: '三秦大地，历史厚重！',
        甘肃: '丝绸之路',
        青海: '好稀有的ip。',
        内蒙古: '天苍苍野茫茫，风吹草低现牛羊',
        新疆: '想尝尝大盘鸡和葡萄干！',
        西藏: '想了解高原生活，还有藏传佛教！',
        广西: '桂林山水甲天下~',
        贵州: '走遍大地神州，最美多彩贵州！',
        云南: '说起来菌子好吃吗？',
        宁夏: '塞上江南！',
        海南: '你们那一定是四季如夏吧。',
        福建: '和广东人的种间关系是？',
        江西: '想去景德镇画瓷器！',
        安徽: '说到安徽bunny比较熟，河北这边经常见到安徽正宗牛肉板面的店铺。',
        江苏: '是江南水乡！不过听说数学题也很难。',
        浙江: '（思考）浙江有什么特色来着？浙菜好吃吗？',
        湖南: '辣不怕！',
        湖北: '你们那边有什么好玩的地方吗？',
        广东: '银在广东已经piu泊sa年~',
        四川: '有个问题，友友是不是经常吃火锅和辣的.jpg',
        辽宁: '距离bunny很近',
        吉林: '白山黑水！',
        黑龙江: '冰雪大省',
      }

      for (const [key, value] of Object.entries(provinceGreetings)) {
        if (region && region.includes(key)) {
          extra = value
          matched = true
          break
        }
      }
    }

    if (!matched) {
      extra = '海内存知己，天涯若比邻。世界很大，互联网让我们相遇，很高兴遇见你。'
    }
  } else {
    const locationStr = city && region ? `${region}, ${city}` : city || region || country
    greeting = `👋 Hello! A warm welcome to you from ${locationStr}.`

    const countryGreetings: Record<string, string> = {
      'United States': "🇺🇸 What's up! How's life in the States?",
      'United Kingdom': '🇬🇧 Cheers mate! Fancy a cuppa?',
      Canada: '🍁 Eh! Sorry for the weather!',
      Australia: "🦘 G'dday mate! How's the barbie?",
      'New Zealand': '🥝 Kia ora! Beautiful country!',
      Japan: '🇯🇵 こんにちは！日本の友達！',
      'South Korea': '🇰🇷 안녕하세요! 한국 친구!',
      Germany: "🇩🇪 Hallo! Wie geht's?",
      France: '🇫🇷 Bonjour! Comment ça va?',
      Italy: '🇮🇹 Ciao! Buongiorno!',
      Spain: '🇪🇸 Hola! ¿Qué tal?',
      Russia: '🇷🇺 Привет! Как дела?',
      Singapore: '🇸🇬 Hello! Welcome to my corner!',
      Malaysia: '🇲🇾 Apa khabar! Selamat datang!',
      Thailand: '🇹🇭 สวัสดี! ยินดีต้อนรับ!',
      Vietnam: '🇻🇳 Xin chào! Chào mừng bạn!',
      India: '🇮🇳 Namaste! Welcome to my nook!',
    }

    let matched = false
    for (const [key, value] of Object.entries(countryGreetings)) {
      if (country && country.includes(key)) {
        extra = value
        matched = true
        break
      }
    }

    if (!matched) {
      extra = 'Welcome from across the globe!'
    }
  }

  return { greeting, extra }
}

// ===== 显示 IP 信息 =====
function getIPInfo(location: VisitorLocation): IPInfo | null {
  if (!location) return null

  const ip = location.ip || '未知'
  const isIPv6 = ip.includes(':')
  const ipType = isIPv6 ? 'IPv6' : 'IPv4'

  return {
    ip,
    ipType,
    isp: location.isp || '未知运营商',
  }
}

// ===== 主函数：渲染访客信息 =====
export async function initVisitorInfo(): Promise<void> {
  const greetingElement = document.getElementById('greeting-text')
  const extraElement = document.getElementById('extra-text')
  const ipElement = document.getElementById('ip-text')

  if (!greetingElement) {
    console.warn('未找到 #greeting-text 元素')
    return
  }

  let location = await getVisitorLocation()
  let fromBrowser = false

  if (!location) {
    location = getLocationFromBrowser()
    fromBrowser = true
  }

  const { greeting, extra } = getWelcomeMessage(location, fromBrowser)

  greetingElement.textContent = greeting

  if (extraElement) {
    extraElement.textContent = extra
  }

  if (ipElement) {
    if (fromBrowser) {
      ipElement.textContent = ''
    } else {
      const ipInfo = getIPInfo(location)
      if (ipInfo) {
        ipElement.textContent = `IP: ${ipInfo.ip} (${ipInfo.ipType}) · ${ipInfo.isp}`
      } else {
        ipElement.textContent = 'IP信息获取失败捏。。'
      }
    }
    ipElement.style.fontSize = '0.75rem'
    ipElement.style.color = 'var(--text-muted, #888)'
    ipElement.style.marginTop = '4px'
  }
}
