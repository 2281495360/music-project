export interface Mv {
  code: number
  count: number
  data: Datum[]
  hasMore: boolean
}

export interface Datum {
  artistId: number
  artistName: string
  artists: Artist[]
  briefDesc: null | string
  cover: string
  desc: null
  duration: number
  id: number
  mark: number
  name: string
  playCount: number
  subed: boolean
}

export interface Artist {
  alias: string[]
  id: number
  name: string
  transNames: string[] | null
}

//mv排行榜
export interface MVRank {
  code: number
  data: MVRankList[]
  hasMore: boolean
  updateTime: number
}

export interface MVRankList {
  alias?: string[]
  artistId: number
  artistName: string
  artists: DatumArtist[]
  briefDesc: null
  cover: string
  desc: null
  duration: number
  id: number
  lastRank: number
  mark: number
  mv: MvInfo
  name: string
  playCount: number
  score: number
  subed: boolean
}

export interface DatumArtist {
  id: number
  name: string
}

export interface MvInfo {
  aliaName: string
  appTitle: string
  appword: string
  area: string
  artists: MvArtist[]
  authId: number
  caption: number
  captionLanguage: string
  dayplays: number
  desc: string
  fee: number
  id: number
  monthplays: number
  mottos: string
  neteaseonly: number
  oneword: null
  online: number
  pic16v9: number
  pic4v3: number
  plays: number
  publishTime: string
  score: number
  stars: null
  status: number
  style: null
  subTitle: string
  subType: string
  title: string
  topWeeks: string
  transName: string
  type: string
  upban: number
  videos: Video[]
  weekplays: number
}

export interface MvArtist {
  id: number
  name: string
}

export interface Video {
  check: boolean
  container: string
  duration: number
  height: number
  md5: string
  size: number
  tag: string
  tagSign: TagSign
  url: string
  width: number
}

export interface TagSign {
  br: number
  mvtype: string
  resolution: number
  tagSign: string
  type: string
}
