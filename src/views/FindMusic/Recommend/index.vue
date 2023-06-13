<template>
  <!-- 轮播图 -->
  <el-carousel :interval="4000" type="card" height="170px">
    <el-carousel-item v-for="item in bannerImgList" :key="item.targetId">
      <img
        :src="item.imageUrl"
        style="width: 100%; height: auto; border-radius: 10px"
      />
    </el-carousel-item>
  </el-carousel>
  <!-- 推荐歌单 -->
  <section>
    <h3>
      <el-button style="font-size: 18px" link
        ><b>推荐歌单<i class="angle right icon"></i></b
      ></el-button>
    </h3>
    <div class="grid_2row_5col">
      <SongListCover
        v-for="item in personalizedPlayList"
        :key="item.id"
        :name="item.name"
        :picUrl="item.picUrl"
        :playCount="item.playCount"
      ></SongListCover>
    </div>
  </section>
  <!-- 热门播客 -->
  <section>
    <h3>
      <el-button style="font-size: 18px" link
        ><b>热门播客<i class="angle right icon"></i></b
      ></el-button>
    </h3>
    <div class="grid_3row_2col">
      <PodcastCoverItem
        v-for="item in hotDjProgramList"
        :key="item.program.id"
        :picUrl="item.program.coverUrl"
        :name="item.program.name"
        :playCount="item.program.listenerCount"
        :duration="item.program.duration"
        :secondCategory="item.program.radio.secondCategory"
        :podcastName="item.program.radio.name"
      ></PodcastCoverItem>
    </div>
  </section>
</template>
<script lang="ts" setup>
import SongListCover from '@/components/SongListCover.vue'
import PodcastCoverItem from '@/components/PodcastCoverItem.vue'
import { getBanner, getHotDjProgram } from '@/api/findMusic.js'
import { getPersonalized } from '@/api/playList.js'
import type { Banner } from '@/models/banner'
import type { hotDjProgramItem } from '@/models/personalized'
import type { palyListItem } from '@/models/play_list'

const bannerImgList = ref<Banner[]>([])
const personalizedPlayList = ref<palyListItem[]>([])
const hotDjProgramList = ref<hotDjProgramItem[]>([])
// 获取轮播图的图片
const getBannerList = async () => {
  let res = await getBanner()
  if (res.code !== 200) return
  bannerImgList.value = res.banners
}
// 获取推荐歌单（未登录）
const getPersonalizedList = async () => {
  let res = await getPersonalized()
  if (res.code !== 200) return
  personalizedPlayList.value = res.result
}
// 获取热门播客（推荐电台）
const getHotDjProgramList = async () => {
  let res = await getHotDjProgram()
  if (res.code !== 200) return
  hotDjProgramList.value = res.toplist
}
onMounted(() => {
  getBannerList()
  getPersonalizedList()
  getHotDjProgramList()
})
</script>
<style lang="less" scoped>
.grid_2row_5col {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(2, 50%);
}
.grid_3row_2col {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(3, 33.3%);
}
</style>
