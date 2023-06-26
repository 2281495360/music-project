//播客分类
export interface PodcastCategory {
  categories: Category[]
  code: number
}

export interface Category {
  id: number
  name: string
  pic56x56Id: number
  pic56x56IdStr: string
  pic56x56Url: string
  pic84x84Id: number
  pic84x84IdUrl: string
  pic96x96Id: number
  pic96x96IdStr: string
  pic96x96Url: string
  picIPad: number
  picIPadStr: string
  picIPadUrl: string
  picMacId: string
  picMacUrl: string
  picPCBlack: number
  picPCBlackStr: string
  picPCBlackUrl: string
  picPCWhite: number
  picPCWhiteStr: string
  picPCWhiteUrl: string
  picUWPId: string
  picUWPUrl: string
  picWeb: number
  picWebStr: string
  picWebUrl: string
}

//播客-猜你喜欢
export interface PodcastRecommend {
  code: number
  data: Datum[]
}

export interface Datum {
  alg: string
  buyed: boolean
  category: string
  categoryId: number
  composeVideo: boolean
  createTime: number
  desc: string
  descPicList: null
  discountPrice: null
  dj: Dj
  dynamic: boolean
  feeScope: number
  finished: boolean
  hightQuality: boolean
  icon: null
  id: number
  intervenePicId: number
  intervenePicUrl: string
  lastProgramCreateTime: number
  lastProgramId: number
  lastProgramName: string
  lastUpdateProgramName: string
  liveInfo: null
  manualTagsDTO: null
  name: string
  original: string
  originalPrice: number
  picId: number
  picUrl: string
  playCount: number
  price: number
  privacy: boolean
  programCount: number
  purchaseCount: number
  radioFeeType: number
  rcmdText: string
  rcmdtext: string
  replaceResource: null
  scoreInfoDTO: null
  secondCategory: string
  secondCategoryId: number
  shortName: null
  subCount: number
  subed: boolean
  taskId: number
  underShelf: boolean
  videos: null
  whiteList: boolean
}

export interface Dj {
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
  experts: null | Experts
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

export interface Experts {
  '1': string
}

//类别热门播客
export interface HotPodcast {
  code: number
  count: number
  djRadios: DjRadio[]
  hasMore: boolean
}

export interface DjRadio {
  buyed: boolean
  category: string
  categoryId: number
  createTime: number
  desc: string
  descPicList: any[]
  discountPrice: null
  dj: Dj
  dynamic: boolean
  feeScope: number
  finished: boolean
  icon: null
  id: number
  intervenePicId: number
  intervenePicUrl: string
  lastProgramCreateTime: number
  lastProgramId: number
  lastProgramName: string
  liveInfo: null
  manualTagsDTO: null
  name: string
  originalPrice: number
  picId: number
  picUrl: string
  playCount: number
  price: number
  privacy: boolean
  programCount: number
  purchaseCount: number
  radioFeeType: number
  rcmdtext: string
  replaceRadio: null
  replaceRadioId: number
  secondCategory: string
  shortName: null
  subCount: number
  subed: boolean
  taskId: number
  underShelf: boolean
  videos: null
}

export interface AvatarDetail {
  identityIconUrl: string
  identityLevel: number
  userType: number
}

export interface podcastCategoryType {
  name: string
  id: number
}
