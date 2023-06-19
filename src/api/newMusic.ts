import request from '@/utils/request.ts'
import type { NewMusic } from '@/models/newMusic'
//通过类型获取最新音乐 （新歌速递）
export function getNewMusicByType(type: number = 0): NewMusic {
  return request({
    url: '/top/song',
    method: 'get',
    params: { type },
  })
}
