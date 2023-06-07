export interface Banner {
  imageUrl: string
  targetId: number
  adid?: null
  targetType?: number
  titleColor?: string
  typeTitle?: string
  url: string
  exclusive?: boolean
  monitorImpress?: null
  monitorClick?: null
  monitorType?: null
  monitorImpressList?: null
  monitorClickList?: null
  monitorBlackList?: null
  extMonitor?: null
  extMonitorInfo?: null
  adSource?: null
  adLocation?: null
  adDispatchJson?: null
  encodeId?: string
  program?: null
  event?: null
  video?: null
  song?: null
  scm?: string
  bannerBizType?: string
}

export interface getBannerType {
  banners: Banner[]
  code: number
}
