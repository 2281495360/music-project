export interface NewMusic {
  code: number
  data: NewMusicItem[]
}

export interface NewMusicItem {
  album: Album
  alias: string[]
  artists: DatumArtist[]
  audition: null
  bMusic: BMusic
  commentThreadId: string
  copyFrom: string
  copyrightId: number
  crbt: null
  dayPlays: number
  disc: string
  duration: number
  exclusive: boolean
  fee: number
  ftype: number
  hearTime: number
  hMusic: HMusic
  id: number
  lMusic: LMusic
  mMusic: MMusic
  mp3Url: string
  mvid: number
  name: string
  no: number
  playedNum: number
  popularity: number
  position: number
  privilege: Privilege
  ringtone: string
  rtUrl: null
  rtUrls: null
  rtype: number
  rurl: null
  score: number
  starred: boolean
  starredNum: number
  status: number
  transNames: string[]
}

export interface Album {
  alias: string[]
  artist: PurpleArtist
  artists: FluffyArtist[]
  blurPicUrl: string
  briefDesc: string
  commentThreadId: string
  company: null | string
  companyId: number
  copyrightId: number
  description: string
  id: number
  name: string
  onSale: boolean
  paid: boolean
  pic: number
  picId: number
  picId_str: string
  picUrl: string
  publishTime: number
  size: number
  songs: any[]
  status: number
  subType: string
  tags: string
  transNames?: string[]
  type: string
}

export interface PurpleArtist {
  albumSize: number
  alias: any[]
  briefDesc: string
  followed: boolean
  id: number
  img1v1Id: number
  img1v1Id_str: string
  img1v1Url: string
  musicSize: number
  name: string
  picId: number
  picUrl: string
  topicPerson: number
  trans: string
}

export interface FluffyArtist {
  albumSize: number
  alias: any[]
  briefDesc: string
  followed: boolean
  id: number
  img1v1Id: number
  img1v1Id_str: string
  img1v1Url: string
  musicSize: number
  name: string
  picId: number
  picUrl: string
  topicPerson: number
  trans: string
}

export interface DatumArtist {
  albumSize: number
  alias: any[]
  briefDesc: string
  followed: boolean
  id: number
  img1v1Id: number
  img1v1Id_str: string
  img1v1Url: string
  musicSize: number
  name: string
  picId: number
  picUrl: string
  topicPerson: number
  trans: string
}

export interface BMusic {
  bitrate: number
  dfsId: number
  extension: string
  id: number
  name: null
  playTime: number
  size: number
  sr: number
  volumeDelta: number
}

export interface HMusic {
  bitrate: number
  dfsId: number
  extension: string
  id: number
  name: null
  playTime: number
  size: number
  sr: number
  volumeDelta: number
}

export interface LMusic {
  bitrate: number
  dfsId: number
  extension: string
  id: number
  name: null
  playTime: number
  size: number
  sr: number
  volumeDelta: number
}

export interface MMusic {
  bitrate: number
  dfsId: number
  extension: string
  id: number
  name: null
  playTime: number
  size: number
  sr: number
  volumeDelta: number
}

export interface Privilege {
  cp: number
  cs: boolean
  dl: number
  fee: number
  fl: number
  flag: number
  id: number
  maxbr: number
  payed: number
  pl: number
  preSell: boolean
  sp: number
  st: number
  subp: number
  toast: boolean
}
