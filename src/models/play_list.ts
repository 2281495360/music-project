export interface palyListItem {
  id?: number
  type?: number
  name?: string
  copywriter?: string
  picUrl?: string
  canDislike?: boolean
  trackNumberUpdateTime?: number
  playCount?: number
  trackCount?: number
  highQuality?: boolean
  alg?: string
}

export interface getPersonalizedType {
  hasTaste: boolean
  code: number
  category: number
  result: palyListItem[]
}
//歌单
export interface PlayList {
  cat: string
  code: number
  more: boolean
  playlists: PlayListItem[]
  total: number
}

export interface PlayListItem {
  adType: number
  alg: string
  anonimous: boolean
  cloudTrackCount: number
  commentCount: number
  commentThreadId: string
  coverImgId: number
  coverImgId_str: string
  coverImgUrl: string
  coverStatus: number
  coverText: string[]
  createTime: number
  creator: Creator
  description: string
  highQuality: boolean
  id: number
  name: string
  newImported: boolean
  ordered: boolean
  playCount: number
  privacy: number
  recommendInfo: null
  recommendText: null
  relateResId: null
  relateResType: string
  shareCount: number
  socialPlaylistCover: null
  specialType: number
  status: number
  subscribed: boolean
  subscribedCount: number
  subscribers: Subscriber[]
  tags: any[]
  totalDuration: number
  trackCount: number
  trackNumberUpdateTime: number
  tracks: null
  trackUpdateTime: number
  updateTime: number
  userId: number
}

export interface Creator {
  accountStatus: number
  anchor: boolean
  authenticationTypes: number
  authority: number
  authStatus: number
  avatarDetail: AvatarDetail
  avatarImgId: number
  avatarImgId_str: string
  avatarImgIdStr: string
  avatarUrl: string
  backgroundImgId: number
  backgroundImgIdStr: string
  backgroundUrl: string
  birthday: number
  city: number
  defaultAvatar: boolean
  description: string
  detailDescription: string
  djStatus: number
  experts: null
  expertTags: string[]
  followed: boolean
  gender: number
  mutual: boolean
  nickname: string
  province: number
  remarkName: null
  signature: string
  userId: number
  userType: number
  vipType: number
}

export interface AvatarDetail {
  identityIconUrl: string
  identityLevel: number
  userType: number
}

export interface Subscriber {
  accountStatus: number
  anchor: boolean
  authenticationTypes: number
  authority: number
  authStatus: number
  avatarDetail: null
  avatarImgId: number
  avatarImgId_str: string
  avatarImgIdStr: string
  avatarUrl: string
  backgroundImgId: number
  backgroundImgIdStr: string
  backgroundUrl: string
  birthday: number
  city: number
  defaultAvatar: boolean
  description: string
  detailDescription: string
  djStatus: number
  experts: null
  expertTags: null
  followed: boolean
  gender: number
  mutual: boolean
  nickname: string
  province: number
  remarkName: null
  signature: string
  userId: number
  userType: number
  vipType: number
}

export interface HighqualityPlayList {
  code: number
  lasttime: number
  more: boolean
  playlists: HighqualityPlayListItem[]
  total: number
}

export interface HighqualityPlayListItem {
  adType?: number
  anonimous?: boolean
  cloudTrackCount?: number
  commentCount?: number
  commentThreadId?: string
  copywriter?: string
  coverImgId?: number
  coverImgId_str?: string
  coverImgUrl?: string
  coverStatus?: number
  createTime?: number
  creator?: Creator
  description?: string
  highQuality?: boolean
  id?: number
  name?: string
  newImported?: boolean
  ordered?: boolean
  playCount?: number
  privacy?: number
  recommendInfo?: null
  recommendText?: null
  shareCount?: number
  socialPlaylistCover?: null
  specialType?: number
  status?: number
  subscribed?: boolean
  subscribedCount?: number
  subscribers?: Subscriber[]
  tag?: string
  tags?: string[]
  totalDuration?: number
  trackCount?: number
  trackNumberUpdateTime?: number
  tracks?: null
  trackUpdateTime?: number
  updateTime?: number
  userId?: number
}
