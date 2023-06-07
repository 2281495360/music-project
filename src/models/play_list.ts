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
