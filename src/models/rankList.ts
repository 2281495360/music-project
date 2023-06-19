//榜单相关
export interface RankListRes {
  artistToplist: ArtistToplist
  code: number
  list: RankList[]
}

export interface ArtistToplist {
  coverUrl: string
  name: string
  position: number
  upateFrequency: string
  updateFrequency: string
}

export interface RankList {
  adType: number
  anonimous: boolean
  artists: null
  backgroundCoverId: number
  backgroundCoverUrl: null
  cloudTrackCount: number
  commentThreadId: string
  coverImageUrl: string
  coverImgId: number
  coverImgId_str: string
  coverImgUrl: string
  coverText: null
  createTime: number
  creator: null
  description: null | string
  englishTitle: null
  highQuality: boolean
  iconImageUrl: null
  id: number
  name: string
  newImported: boolean
  opRecommend: boolean
  ordered: boolean
  playCount: number
  privacy: number
  recommendInfo: null
  socialPlaylistCover: null
  specialType: number
  status: number
  subscribed: null
  subscribedCount: number
  subscribers: any[]
  tags: string[]
  titleImage: number
  titleImageUrl: null
  ToplistType: string
  totalDuration: number
  trackCount: number
  trackNumberUpdateTime: number
  tracks: null
  trackUpdateTime: number
  updateFrequency: string
  updateTime: number
  userId: number
}
