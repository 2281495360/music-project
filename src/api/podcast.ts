import request from '@/utils/request.ts'
import type { PodcastCategory, PodcastRecommend } from '@/models/podcastType'
//获取播客分类
export function getPodcastCategory(): PodcastCategory {
  return request({
    url: '/dj/catelist',
    method: 'get',
  })
}
//播客-猜你喜欢
export function getPodcastRecommend(limit: number = 5): PodcastRecommend {
  return request({
    url: '/dj/personalize/recommend',
    method: 'get',
    params: { limit },
  })
}
