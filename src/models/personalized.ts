//热门播客
export interface hotDjProgramItem {
  program: {
    coverUrl: string
    blurCoverUrl: string
    duration: number
    id: number
    name: string
    listenerCount: number
    radio: {
      secondCategory: string
      name: string
    }
  }
  rank: number
  lastRank: number
  score: number
  programFeeType: number
}

export interface hotDjProgram {
  code: number
  updateTime: number
  toplist: hotDjProgramItem[]
}

//独家放送
export interface ExclusiveMV {
  code: number
  name: string
  result: ExclusiveMVItem[]
}

export interface ExclusiveMVItem {
  alg: string
  copywriter: string
  id: number
  name: string
  picUrl: string
  sPicUrl: string
  type: number
  url: string
}

//最新音乐
export interface NewMusic {
  category: number
  code: number
  result: NewMusicItem[]
}

export interface NewMusicItem {
  alg: string
  canDislike: boolean
  copywriter: null
  id: number
  name: string
  picUrl: string
  song: {
    artists: SongArtist[]
  }
  trackNumberUpdateTime: null
  type: number
}
export interface SongArtist {
  albumSize: number
  alias: any[]
  briefDesc: string
  id: number
  img1v1Id: number
  img1v1Url: string
  musicSize: number
  name: string
  picId: number
  picUrl: string
  topicPerson: number
  trans: string
}
