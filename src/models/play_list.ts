export interface PersonalizedPlayListItem {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}

export interface getPersonalizedType {
  hasTaste: boolean
  code: number
  category: number
  result: PersonalizedPlayListItem[]
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

//歌单详情
export interface MusicDetail {
  code: number
  fromUserCount: number
  fromUsers: null
  playlist: Playlist
  privileges: Privilege[]
  relatedVideos: null
  resEntrance: null
  sharedPrivilege: null
  songFromUsers: null
  trialMode: number
  urls: null
}

export interface Playlist {
  adType: number
  algTags: null
  backgroundCoverId: number
  backgroundCoverUrl: null
  bannedTrackIds: null
  cloudTrackCount: number
  commentCount: number
  commentThreadId: string
  copied: boolean
  coverImgId: number
  coverImgId_str: string
  coverImgUrl: string
  createTime: number
  creator: Creator
  description: string
  englishTitle: null
  gradeStatus: string
  highQuality: boolean
  historySharedUsers: null
  id: number
  mvResourceInfos: null
  name: string
  newImported: boolean
  officialPlaylistType: null
  opRecommend: boolean
  ordered: boolean
  playCount: number
  privacy: number
  relateResType: null
  remixVideo: null
  score: null
  shareCount: number
  sharedUsers: null
  specialType: number
  status: number
  subscribed: boolean
  subscribedCount: number
  subscribers: Subscriber[]
  tags: any[]
  titleImage: number
  titleImageUrl: null
  ToplistType: string
  trackCount: number
  trackIds: TrackID[]
  trackNumberUpdateTime: number
  tracks: Track[]
  trackUpdateTime: number
  updateFrequency: null
  updateTime: number
  userId: number
  videoIds: null
  videos: null
}

export interface TrackID {
  alg: null
  at: number
  f: null
  id: number
  lr: number
  ratio: number
  rcmdReason: string
  sc: null
  sr: null
  t: number
  uid: number
  v: number
}

export interface Track {
  a: null
  al: Al
  alia: string[]
  ar: Ar[]
  awardTags: null
  cd: string
  cf: string
  copyright: number
  cp: number
  crbt: null
  djId: number
  dt: number
  entertainmentTags: null
  fee: number
  ftype: number
  h: H
  hr: null | Hr
  id: number
  l: L
  m: M
  mark: number
  mst: number
  mv: number
  name: string
  no: number
  noCopyrightRcmd: null
  originCoverType: number
  originSongSimpleData: null | OriginSongSimpleData
  pop: number
  pst: number
  publishTime: number
  resourceState: boolean
  rt: null | string
  rtUrl: null
  rtUrls: any[]
  rtype: number
  rurl: null
  s_id: number
  single: number
  songJumpInfo: null
  sq: Sq
  st: number
  t: number
  tagPicList: null
  tns: string[]
  v: number
  version: number
}

export interface Al {
  id: number
  name: string
  pic: number
  pic_str: string
  picUrl: string
  tns: string[]
}

export interface Ar {
  alias: any[]
  id: number
  name: string
  tns: any[]
}

export interface H {
  br: number
  fid: number
  size: number
  vd: number
}

export interface Hr {
  br: number
  fid: number
  size: number
  vd: number
}

export interface L {
  br: number
  fid: number
  size: number
  vd: number
}

export interface M {
  br: number
  fid: number
  size: number
  vd: number
}

export interface OriginSongSimpleData {
  albumMeta: AlbumMeta
  artists: Artist[]
  name: string
  songId: number
}

export interface AlbumMeta {
  id: number
  name: string
}

export interface Artist {
  id: number
  name: string
}

export interface Sq {
  br: number
  fid: number
  size: number
  vd: number
}

export interface Privilege {
  chargeInfoList: ChargeInfoList[]
  cp: number
  cs: boolean
  dl: number
  dlLevel: string
  downloadMaxbr: number
  downloadMaxBrLevel: string
  fee: number
  fl: number
  flag: number
  flLevel: string
  freeTrialPrivilege: FreeTrialPrivilege
  id: number
  maxbr: number
  maxBrLevel: string
  paidBigBang: boolean
  payed: number
  pc: null
  pl: number
  playMaxbr: number
  playMaxBrLevel: string
  plLevel: string
  preSell: boolean
  realPayed: number
  rightSource: number
  rscl: null
  sp: number
  st: number
  subp: number
  toast: boolean
}

export interface ChargeInfoList {
  chargeMessage: null
  chargeType: number
  chargeUrl: null
  rate: number
}

export interface FreeTrialPrivilege {
  cannotListenReason: number | null
  listenType: null
  resConsumable: boolean
  userConsumable: boolean
}
