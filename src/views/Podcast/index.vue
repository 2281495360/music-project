<template>
  <el-scrollbar>
    <div class="ui segment header_box">
      <div class="header_box_item" v-for="item in imgUrlList" :key="item.id">
        <div
          class="img_container"
          :style="{ backgroundImage: `url(${item.picWebUrl})` }"
        ></div>
        <div>{{ item.name }}</div>
      </div>
    </div>
    <section>
      <h3>猜你喜欢</h3>
      <div class="grid_item_container">
        <SongListCover
          style="width: 160px"
          v-for="item in maybeLike"
          :key="item.id"
          :name="item.name"
          :playCount="item.playCount"
          :picUrl="item.picUrl"
          :subCount="item.subCount"
        >
          <el-tag effect="plain" type="info" size="small">{{
            item.secondCategory
          }}</el-tag>
        </SongListCover>
      </div>
    </section>
    <!-- <section style="margin-bottom: 20px">
      <h3>本周上新</h3>
      <div class="ui two column grid" style="margin-right: 0">
        <div class="column" v-for="item in 2" :key="item">
          <div class="ui items">
            <div class="item two_column_item" v-for="item in 3" :key="item">
              <div class="ui tiny image" style="width: 84px">
                <img
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
              </div>
              <div class="middle aligned content">
                <el-space direction="vertical" alignment="flex-start">
                  <header>寂寞烟火</header>
                  <el-tag type="info" effect="plain" size="small"
                    >歌曲翻唱</el-tag
                  >
                  <el-space>
                    <el-button link>2023抖音热歌BGM</el-button>
                    <span><i class="play circle outline icon"></i>666万</span>
                    <span><i class="clock outline icon"></i>00:13</span>
                  </el-space>
                </el-space>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <section v-for="item in podcastCategory" :key="item.id">
      <h3 style="cursor: pointer">{{ item.name }} ></h3>
      <PodcastGridItem :cateId="item.id"></PodcastGridItem>
    </section>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { getPodcastCategory, getPodcastRecommend } from '@/api/podcast'
import type { Category, Datum, podcastCategoryType } from '@/models/podcastType'
import PodcastGridItem from '@/components/podcastGridItem.vue'
const imgUrlList = ref<Category[]>([])
const maybeLike = ref<Datum[]>([])
const podcastCategory = ref<podcastCategoryType[]>([])
const initPodcastCategory = async () => {
  let res = await getPodcastCategory()
  if (res.code !== 200) return
  imgUrlList.value = res.categories
  podcastCategory.value = res.categories
    .map((item) => {
      return {
        name: item.name,
        id: item.id,
      }
    })
    .slice(0, 10)
}
const getMaybeYouLike = async (limit: number) => {
  let res = await getPodcastRecommend(limit)
  if (res.code !== 200) return
  maybeLike.value = res.data
}
onMounted(() => {
  initPodcastCategory()
  getMaybeYouLike(5)
})
</script>

<style lang="less" scoped>
.two_column_item:hover {
  background-color: #ebebeb;
}
.header_box {
  display: flex;
  flex-wrap: wrap;
  column-gap: 39px;
  row-gap: 20px;
  background-color: #fff5f5;
  .header_box_item {
    display: flex;
    width: 60px;
    height: 60px;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #ebedf0;
    }
    .img_container {
      width: 48px;
      height: 48px;
      background-position: 48px 48px;
    }
  }
}
.grid_item_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
