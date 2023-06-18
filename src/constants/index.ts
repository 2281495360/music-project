// 当前环境模式
export const ENV_MODE = import.meta.env.MODE

// 接口的网关域名
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

// 主题管理
export const APP_DEFAULT_THEME = import.meta.env.VITE_APP_DEFAULT_THEME

// 产品名称
export const APP_NAME = import.meta.env.VITE_APP_NAME

// 网站首页标题
export const APP_TITLE = import.meta.env.VITE_APP_TITLE

// 网站描述
export const APP_DESC = import.meta.env.VITE_APP_DESC

// 网站描述
export const APP_KEYWORDS = import.meta.env.VITE_APP_KEYWORDS

// 本地存储前缀
export const STORAGE_PREFIX = import.meta.env.VITE_STORAGE_PREFIX

//歌单分类
export const playListType = [
  '华语',
  '欧美',
  '日语',
  '韩语',
  '粤语',
  '流行',
  '摇漆',
  '民谣',
  '电子',
  '舞曲',
  '说唱',
  '轻音乐',
  '爵士',
  '乡村',
  'R&B/Soul',
  '古典',
  '英伦',
  '金属',
  '朋克',
  '蓝调',
  '雷鬼',
  '世界音乐',
  '拉丁',
  'New Age',
  '古风',
  '后摇',
  'Bossa Nova',
  '清晨',
  '夜晚',
  '学习',
  '工作',
  '午休',
  '下午茶',
  '地铁',
  '驾车',
  '运动',
  '旅行',
  '散步',
  '酒吧',
  '怀旧',
  '清新',
  '浪漫',
  '伤感',
  '治愈',
  '放松',
  '孤独',
  '感动',
  '兴奋',
  '快乐',
  '安静',
  '思念',
  '综艺',
  '影视原声',
  'ACG',
  '儿童',
  '校园',
  '游戏',
  '70后',
  '80后',
  '90后',
  '网络歌曲',
  'KTV',
  '经典',
  '翻唱',
  '吉他',
  '钢琴',
  '器乐',
  '榜单',
  '00后',
]

//歌手筛选条件
export const classificationList = new Map([
  [1, '男歌手'],
  [2, '女歌手'],
  [3, '乐队'],
])
//歌手筛选条件
export const languageList = new Map([
  [7, '华语'],
  [96, '欧美'],
  [8, '日本'],
  [16, '韩国'],
  [0, '其他'],
])
//歌手筛选条件
export const filterLetterList = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]
