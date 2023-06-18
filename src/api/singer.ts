import request from '@/utils/request.ts'
import type { Singer } from '@/models/singer'
const api = {
  singer: '/artist/list', //歌手分类（根据筛选条件检索歌手）
}

export default api

/* 获取歌单分类 */
// export function getAllCat() {
//   return request({
//     url: api.allCat,
//     method: 'get',
//   })
// }

/* 根据条件得到歌手列表 */
export function getSingerList({ type, area, initial, offset }): Singer {
  return request({
    url: api.singer,
    method: 'get',
    params: { type, area, initial, offset },
  })
}
