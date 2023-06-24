import request from '@/utils/request.ts'
import type { Mv, MVRank } from '@/models/mv'
//获取MV
export function getMV({ area, type, order, limit, offset }): Mv {
  return request({
    url: '/mv/all',
    method: 'get',
    params: { area, type, order, limit, offset },
  })
}

//获取mv排行榜
export function getMvRank({ area, limit, offset }): MVRank {
  return request({
    url: '/top/mv',
    method: 'get',
    params: { area, limit, offset },
  })
}
