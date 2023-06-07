<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in bannerImgList" :key="item.targetId">
      <img :src="item.imageUrl" style="width: 100%; height: 100%" />
    </el-carousel-item>
  </el-carousel>
  <GridItem :title="recommendTitle" :row="recommendRow" :col="recommendCol">
    <SongListCover></SongListCover>
  </GridItem>
  <GridItem
    :title="topPodcastsTitle"
    :row="topPodcastsRow"
    :col="topPodcastsCol"
  >
    <div class="container">
      <img
        class="ui tiny image"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <el-space class="content" direction="vertical" alignment="flex-start">
        <header>寂寞烟火</header>
        <el-tag type="info" effect="plain" size="small">歌曲翻唱</el-tag>
        <el-space>
          <el-button link>2023抖音热歌BGM</el-button>
          <span><i class="play circle outline icon"></i>666万</span>
          <span><i class="clock outline icon"></i>00:13</span>
        </el-space>
      </el-space>
    </div>
  </GridItem>
</template>
<script lang="ts" setup>
import GridItem from '@/components/GridItem.vue'
import SongListCover from '@/components/SongListCover.vue'
import { getBanner } from '@/api/findMusic.js'
import { getPersonalized } from '@/api/playList.js'
import type { Banner } from '@/models/banner'
import type { palyListItem } from '@/models/play_list'

const bannerImgList = ref<Banner[]>([])
const personalizedPlayList = ref<palyListItem[]>([])
// 获取推荐歌单（未登录）
const getPersonalizedList = async () => {
  let res = await getPersonalized()
  if (res.code !== 200) return
  personalizedPlayList.value = res.result
}
// 获取轮播图的图片
const getBannerList = async () => {
  let res = await getBanner()
  if (res.code !== 200) return
  bannerImgList.value = res.banners
}
onMounted(() => {
  getBannerList()
  getPersonalizedList()
})
const recommendTitle = ref('推荐歌单')
const recommendRow = ref(2)
const recommendCol = ref(5)
const topPodcastsTitle = ref('热门播客')
const topPodcastsRow = ref(3)
const topPodcastsCol = ref(2)
</script>
<style lang="less" scoped>
.container {
  display: flex;
  .content {
    margin-left: 10px;
  }
}
</style>
