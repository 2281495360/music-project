import request from '@/utils/request.ts'

const api = {
  banner: '/banner', // 获取轮播图
  hotSearch: '/search/hot/detail', // 获取热搜
  search: '/cloudsearch', // 检索歌曲
  searchSuggest: '/search/suggest', // 获取搜索建议
}

export default api

// 获取轮播图
export function getBanner() {
  return request({
    url: api.banner,
    method: 'get',
  })
}

// 获取热搜
export function getHotSearch() {
  return request({
    url: api.hotSearch,
    method: 'get',
  })
}

// 获取搜索建议
export function getSearchSuggest({ type, keywords }) {
  return request({
    url: api.searchSuggest,
    method: 'get',
    params: { type, keywords },
  })
}

// 检索歌曲
export function search({ limit, offset, type, keywords }) {
  return request({
    url: api.searchSuggest,
    method: 'get',
    params: { limit, offset, type, keywords },
  })
}
