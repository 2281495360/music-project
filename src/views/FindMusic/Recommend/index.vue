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
  <div class="ui hidden divider"></div>
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
  <div class="ui hidden divider"></div>
  <!-- 独家放送 -->
  <section>
    <h3>
      <el-button style="font-size: 18px" link
        ><b>独家放送<i class="angle right icon"></i></b
      ></el-button>
    </h3>
    <div class="ui three column grid" style="margin-right: 0">
      <div class="column" v-for="item in exclusiveMvList" :key="item.id">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img :src="item.picUrl" class="img" />
          <p style="padding: 0 4px 4px 4px">{{ item.name }}</p>
        </el-card>
      </div>
    </div>
  </section>
  <div class="ui hidden divider"></div>
  <!-- 最新音乐 -->
  <section>
    <h3>
      <el-button style="font-size: 18px" link
        ><b>最新音乐<i class="angle right icon"></i></b
      ></el-button>
    </h3>
    <div class="grid_4row_3col">
      <div class="item" v-for="item in newMusicList" :key="item.id">
        <img :src="item.picUrl" />
        <main style="margin-left: 0.5em">
          <el-text truncated style="width: 220px">{{ item.name }}</el-text>
          <div style="opacity: 0.5; font-size: 12px">
            <span
              v-for="artist in item.song.artists.slice(0, 2)"
              :key="artist.id"
            >
              {{ artist.name }}&nbsp;
            </span>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import SongListCover from '@/components/SongListCover.vue'
import PodcastCoverItem from '@/components/PodcastCoverItem.vue'
import {
  getBanner,
  getHotDjProgram,
  getExclusiveMV,
  getNewMusic,
} from '@/api/findMusic.js'
import { getPersonalized } from '@/api/playList.js'
import type { Banner } from '@/models/banner'
import type {
  hotDjProgramItem,
  ExclusiveMVItem,
  NewMusicItem,
} from '@/models/personalized'
import type { palyListItem } from '@/models/play_list'

const bannerImgList = ref<Banner[]>([])
const personalizedPlayList = ref<palyListItem[]>([])
const hotDjProgramList = ref<hotDjProgramItem[]>([])
const exclusiveMvList = ref<ExclusiveMVItem[]>([])
const newMusicList = ref<NewMusicItem[]>([])
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
// 获取独家放送
const getExclusiveMvList = async () => {
  let res = await getExclusiveMV()
  if (res.code !== 200) return
  exclusiveMvList.value = res.result
}
// 获取最新音乐
const getNewMusicList = async () => {
  let res = await getNewMusic()
  if (res.code !== 200) return
  newMusicList.value = res.result
}
onMounted(() => {
  getBannerList()
  getPersonalizedList()
  getHotDjProgramList()
  getExclusiveMvList()
  getNewMusicList()
})
</script>
<style lang="less" scoped>
.img {
  width: 100%;
  height: auto;
  &:hover {
    cursor: pointer;
  }
}
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
.grid_4row_3col {
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: repeat(4, 25%);
  grid-row-gap: 10px;
  .item {
    display: flex;
    height: 50px;
    align-items: center;
    margin-right: 10px;
    &:hover {
      background-color: #ebebeb;
    }
    img:hover {
      cursor: pointer;
    }
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
}
</style>
