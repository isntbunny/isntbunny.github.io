// 你的欧路生词本数据（共401个单词）
export const wordList = [
  { id: 1, english: 'behalf', chinese: '方面, 利益, 赞同' },
  { id: 2, english: 'allergic', chinese: '过敏的' },
  { id: 3, english: 'exaggerate', chinese: '扩大, 增加; 夸大, 夸张' },
  { id: 4, english: 'particularly', chinese: '特别; 尤其' },
  { id: 5, english: 'mighty', chinese: '有力的；有势力的；强有力的' },
  { id: 6, english: 'substitute', chinese: '代替, 替换, 代用' },
  { id: 7, english: 'dispute', chinese: '辩论；阻止；抗拒；怀疑' },
  { id: 8, english: 'overwhelm', chinese: '覆盖，淹没; 压倒，制服' },
  { id: 9, english: 'expertise', chinese: '专门知识或技能' },
  { id: 10, english: 'out of the way', chinese: '偏远; 异常的, 罕见的' },
  { id: 11, english: 'bacterium', chinese: '细菌' },
  { id: 12, english: 'common era', chinese: '公元；公历纪元' },
  { id: 13, english: 'petrol', chinese: '汽油' },
  { id: 14, english: 'point of view', chinese: '观点' },
  { id: 15, english: 'CE', chinese: '公元' },
  { id: 16, english: 'dialect', chinese: '方言，土话' },
  { id: 17, english: 'drought', chinese: '干旱；缺乏' },
  { id: 18, english: 'erupt', chinese: '爆发, 喷发; 突然发生' },
  { id: 19, english: 'evacuate', chinese: '排泄；疏散，撤退' },
  { id: 20, english: 'hurricane', chinese: '飓风, 旋风' },
  { id: 21, english: 'jog', chinese: '慢走；慢跑; 轻敲，轻推' },
  { id: 22, english: 'kit', chinese: '衣物和装备; 成套用品' },
  { id: 23, english: 'landfall', chinese: '着陆' },
  { id: 24, english: 'landslide', chinese: '山崩;崩塌;滑坡' },
  { id: 25, english: 'magnitude', chinese: '巨大; 重要性; 星等' },
  { id: 26, english: 'now and then', chinese: '有时, 时而, 不时' },
  { id: 27, english: 'percent', chinese: '百分比，百分率' },
  { id: 28, english: 'push-up', chinese: '俯卧撑' },
  { id: 29, english: 'rather than', chinese: '宁可...也不愿,而不是' },
  { id: 30, english: 'revive', chinese: '苏醒；复兴；复活' },
  { id: 31, english: 'stricken', chinese: '受灾的, 遭损害的' },
  { id: 32, english: 'summary', chinese: '扼要的；概要，摘要' },
  { id: 33, english: 'sweep away', chinese: '清除；一扫而空' },
  { id: 34, english: 'tornado', chinese: '旋风；龙卷风' },
  { id: 35, english: 'tsunami', chinese: '海啸' },
  { id: 36, english: 'unify', chinese: '统一；使相同，使一致' },
  { id: 37, english: 'volcanic eruption', chinese: '火山爆发' },
  { id: 38, english: 'whistle', chinese: '口哨；啸啸声；汽笛' },
  { id: 39, english: 'addict', chinese: '有瘾的人，入迷的人' },
  { id: 40, english: 'BCE', chinese: '公元前' },
  { id: 41, english: 'brochure', chinese: '手册，小册子' },
  { id: 42, english: 'cheat', chinese: '欺骗；骗取；作弊' },
  { id: 43, english: 'check in', chinese: '登记签到' },
  { id: 44, english: 'check out', chinese: '检验；结账离开' },
  { id: 45, english: 'come along', chinese: '出现；一起来；进步' },
  { id: 46, english: 'Cusco', chinese: '库斯科' },
  { id: 47, english: 'empire', chinese: '帝国；帝王统治' },
  { id: 48, english: 'even though', chinese: '即使' },
  { id: 49, english: 'extra-curricular', chinese: '课外的' },
  { id: 50, english: 'fall apart', chinese: '散开, 崩溃, 破碎' },
]

// 学习进度存储（本地）
export function getLearnedWords() {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('bunny_learned_words')
    if (saved) return JSON.parse(saved)
  }
  return []
}

export function saveLearnedWords(ids) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('bunny_learned_words', JSON.stringify(ids))
  }
}
