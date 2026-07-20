// 高考倒计时

const GAOKAO_MONTH = 6
const GAOKAO_DAY = 7

function getCurrentDate(): Date {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

function getDaysToGaokao(targetYear: number): number {
  const today = getCurrentDate()
  const gaokaoDate = new Date(targetYear, GAOKAO_MONTH - 1, GAOKAO_DAY)
  const diffTime = gaokaoDate.getTime() - today.getTime()
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

function updateCountdown(targetYear: number): void {
  const days = getDaysToGaokao(targetYear)
  const daysSpan = document.getElementById('countdownDays')
  if (daysSpan) {
    daysSpan.textContent = String(days)
  }
}

function generateYearOptions(): number[] {
  const today = getCurrentDate()
  const currentYear = today.getFullYear()
  const currentGaokaoDate = new Date(currentYear, GAOKAO_MONTH - 1, GAOKAO_DAY)

  let startYear = currentYear
  if (today > currentGaokaoDate) {
    startYear = currentYear + 1
  }

  const endYear = startYear + 5
  const years: number[] = []
  for (let y = startYear; y <= endYear; y++) {
    years.push(y)
  }
  return years
}

// ===== 主函数：初始化倒计时 =====
export function initCountdown(): void {
  const select = document.getElementById('yearSelect') as HTMLSelectElement
  if (!select) {
    console.error('未找到 id 为 yearSelect 的下拉框元素')
    return
  }

  const years = generateYearOptions()
  if (years.length === 0) {
    const emptyOpt = document.createElement('option')
    emptyOpt.textContent = '无年份'
    select.appendChild(emptyOpt)
    const daysSpan = document.getElementById('countdownDays')
    if (daysSpan) daysSpan.textContent = '--'
    return
  }

  let defaultYear = 2027
  if (!years.includes(defaultYear)) {
    defaultYear = years[0]
  }

  select.innerHTML = ''
  years.forEach((year) => {
    const option = document.createElement('option')
    option.value = String(year)
    option.textContent = year + '年'
    if (year === defaultYear) {
      option.selected = true
    }
    select.appendChild(option)
  })

  const initialSelected = parseInt(select.value, 10)
  if (!isNaN(initialSelected)) {
    updateCountdown(initialSelected)
  } else {
    const daysSpan = document.getElementById('countdownDays')
    if (daysSpan) daysSpan.textContent = '--'
  }

  // 替换 select 以重新绑定事件
  const newSelect = select.cloneNode(true) as HTMLSelectElement
  select.parentNode?.replaceChild(newSelect, select)

  newSelect.addEventListener('change', function (e: Event) {
    const target = e.target as HTMLSelectElement
    const selectedYear = parseInt(target.value, 10)
    if (!isNaN(selectedYear)) {
      updateCountdown(selectedYear)
    } else {
      const daysSpan = document.getElementById('countdownDays')
      if (daysSpan) daysSpan.textContent = '--'
    }
  })
}
