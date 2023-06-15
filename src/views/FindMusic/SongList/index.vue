<template>
  <div
    class="ui segment wrapper"
    v-for="item in highQualityPlayList"
    :key="item.id"
    :style="{ 'background-image': `url(${item.coverImgUrl})` }"
  >
    <div class="content">
      <img class="ui small bordered rounded image" :src="item.coverImgUrl" />
      <div class="wrapper_right_box">
        <el-tag effect="plain" size="large" type="warning" round
          ><i class="chess queen icon"></i>精品歌单</el-tag
        >
        <h4 style="margin-top: 20px; color: #fff">
          {{ item.name }}
        </h4>
        <p style="color: #fff; opacity: 0.5">{{ item.copywriter }}</p>
      </div>
    </div>
  </div>
  <div class="radio_box">
    <el-popover placement="right" :width="420" trigger="click">
      <template #reference>
        <el-button round plain
          >流行<el-icon class="el-icon--right"><ArrowRight /></el-icon
        ></el-button>
      </template>
      <el-radio-group v-model="radio" size="small" style="width: 100%">
        <div class="ui segments" style="width: 100%">
          <div
            class="ui segment"
            style="display: flex; flex-wrap: wrap; gap: 10px"
          >
            <el-radio label="华语" border>华语</el-radio>
            <el-radio label="欧美" border>欧美</el-radio>
            <el-radio label="欧美" border>欧美</el-radio>
            <el-radio label="欧美" border>欧美</el-radio>
            <el-radio label="欧美" border>欧美</el-radio>
            <el-radio label="欧美" border>欧美</el-radio>
            <el-radio label="欧美" border>欧美</el-radio>
            <el-radio label="欧美" border>欧美</el-radio>
            <el-radio label="欧美" border>欧美</el-radio>
          </div>
        </div>
      </el-radio-group>
    </el-popover>
    <el-radio-group v-model="radio" size="small" @change="changeCat">
      <el-radio-button v-for="item in radioList" :key="item" :label="item" />
    </el-radio-group>
  </div>
  <main class="grid_container">
    <SongListCover
      v-for="item in palyList"
      :key="item.id"
      :name="item.name"
      :picUrl="item.coverImgUrl"
      :playCount="item.playCount"
      ><el-tag effect="plain" type="info" size="small" v-if="false"
        >3D环绕</el-tag
      ></SongListCover
    >
  </main>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import SongListCover from '@/components/SongListCover.vue'
import { getPlayListByCat, getHighQuality } from '@/api/playList'
import type { PlayListItem, HighqualityPlayListItem } from '@/models/play_list'

const radio = ref('华语')
const radioList = ['华语', '流行', '古典', 'ACG', '摇滚', '民谣']
const palyList = ref<PlayListItem[]>([])
const highQualityPlayList = ref<HighqualityPlayListItem[]>([])
interface PlayListParams {
  limit: number
  order: string
  cat: string
  offset: number
}
const getPlayListParams = reactive<PlayListParams>({
  limit: 25,
  order: 'hot',
  cat: '华语',
  offset: 0,
})
const getPlayList = async (params: PlayListParams) => {
  let res = await getPlayListByCat(params)
  if (res.code !== 200) return
  palyList.value = res.playlists
}
const getHighQualityList = async (limit: number = 1, cat: string) => {
  let res = await getHighQuality(limit, cat)
  if (res.code !== 200) return
  highQualityPlayList.value = res.playlists
}
const changeCat = (value: string) => {
  getPlayListParams.cat = value
  getPlayList(getPlayListParams)
  getHighQualityList(1, value)
}
onMounted(() => {
  getPlayList(getPlayListParams)
  getHighQualityList(1, '华语')
})
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  padding: 0;
  border: none;
  overflow: hidden;
  border-radius: 8px;
  .content {
    display: flex;
    padding: 10px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    backdrop-filter: blur(20px);
    .wrapper_right_box {
      margin-left: 10px;
      padding-top: 20px;
    }
  }
}
.radio_box {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.grid_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
:deep(.el-radio__input) {
  display: none;
}
:deep(.el-radio) {
  margin-right: 0;
}
</style>
