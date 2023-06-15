import request from '@/utils/request.ts'
import type {
  getPersonalizedType,
  PlayList,
  HighqualityPlayList,
} from '@/models/play_list'

const api = {
  personalized: '/personalized', // 获取推荐歌单
  playListDetail: '/playlist/detail', // 获取歌单详情
  topList: '/toplist', // 获取排行榜信息
  allCat: '/playlist/catlist', // 获取歌单分类
  hotCat: '/playlist/hot', // 获取热门歌单分类
  playListByCat: '/top/playlist', //根据分类获取歌单
  highQualityTags: '/playlist/highquality/tags', // 精品歌单标签列表
  highQuality: '/top/playlist/highquality', // 获取精品歌单
  recommend: '/recommend/resource', // login 获取个性推荐歌单
  suberList: '/playlist/subscribers', // 获取歌单收藏者
  // login 收藏/取消收藏歌单 t:类型, 1:收藏, 2:取消收藏
  setPlaylistSub: '/playlist/subscribe',
  // login 添加/删除歌曲到自己创建的歌单 op:del/add pid:playlistId  tracks:musicId 用逗号隔开的字符串
  musicToPlaylist: '/playlist/tracks',
}

export default api

/* 获取推荐歌单 */
export function getPersonalized(limit: number = 10): getPersonalizedType {
  return request({
    url: api.personalized,
    method: 'get',
    params: { limit },
  })
}

/* 获取歌单详情 */
export function getPlayListDetail(id) {
  return request({
    url: api.playListDetail,
    method: 'get',
    params: { id, timestamp: Date.now() },
  })
}

/* 获取排行榜信息 */
export function getToplist() {
  return request({
    url: api.topList,
    method: 'get',
  })
}

/* 获取歌单分类 */
export function getAllCat() {
  return request({
    url: api.allCat,
    method: 'get',
  })
}

/* 获取热门歌单分类 */
export function getHotCat() {
  return request({
    url: api.hotCat,
    method: 'get',
  })
}

/* 根据分类获取歌单 */
export function getPlayListByCat({ limit, order, cat, offset }): PlayList {
  return request({
    url: api.playListByCat,
    method: 'get',
    params: { limit, order, cat, offset },
  })
}

/* 精品歌单标签列表 */
export function getHighQualityTags() {
  return request({
    url: api.highQualityTags,
    method: 'get',
  })
}

/* 获取精品歌单 */
export function getHighQuality(
  limit: number,
  cat: string,
  before?: number
): HighqualityPlayList {
  return request({
    url: api.highQuality,
    method: 'get',
    params: { limit, cat, before },
  })
}

/* login 获取个性推荐歌单 */
export function getRecommend() {
  return request({
    url: api.recommend,
    method: 'get',
  })
}

/* 获取歌单收藏者 */
export function getSuberList({ id, limit = 30, offset }) {
  return request({
    url: api.suberList,
    method: 'get',
    params: { id, limit, offset },
  })
}

/* login 收藏/取消收藏歌单 t : 类型,1:收藏,2:取消收藏 */
export function setPlaylistSub(id, t) {
  return request({
    url: api.setPlaylistSub,
    method: 'get',
    params: { id, t, timestamp: Date.now() },
  })
}

/* login 添加/删除歌曲到自己创建的歌单 op:del/add pid:playlistId  tracks:musicId 用逗号隔开的字符串 */
export function musicToPlaylist({ op, pid, tracks }) {
  return request({
    url: api.musicToPlaylist,
    method: 'get',
    params: { op, pid, tracks },
  })
}
