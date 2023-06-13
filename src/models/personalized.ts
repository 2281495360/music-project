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
