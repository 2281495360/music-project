<template>
  <div class="mv_rank_container">
    <header>
      <el-text type="info">最近更新：今天</el-text>
      <el-radio-group v-model="radio" size="small" @change="changeArea">
        <el-radio-button label="内地" />
        <el-radio-button label="港台" />
        <el-radio-button label="欧美" />
        <el-radio-button label="日本" />
        <el-radio-button label="韩国" />
      </el-radio-group>
    </header>
    <main>
      <el-card
        :body-style="{
          display: 'flex',
          alignItems: 'center',
          padding: '20px 10px 20px 10px',
        }"
        shadow="hover"
        class="mv_rank_item"
        v-for="(mv, index) in MvList"
        :key="mv.id"
      >
        <div class="item_rank">
          {{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}
        </div>
        <el-image lazy :src="mv.cover" class="item_cover" fit="cover">
          <template #placeholder>
            <div class="image-slot">Loading<span class="dot">...</span></div>
          </template>
        </el-image>
        <div class="item_content">
          <header>
            <el-text truncated style="width: 200px">{{ mv.name }}</el-text>
          </header>
          <div>
            <el-button link>{{ mv.artistName }}</el-button>
          </div>
          <div>
            <el-icon color="#ec4141"><i class="fire icon"></i></el-icon>
            <span>{{ useNumberFormat(mv.score) }}</span>
            &nbsp;
            <el-icon><i class="play circle outline icon"></i></el-icon>
            <span>{{ useNumberFormat(mv.playCount) }}</span>
          </div>
        </div>
      </el-card>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useNumberFormat } from '@/utils/number'
import { getMvRank } from '@/api/video'
import type { MVRankList } from '@/models/mv'
interface paramsType {
  area: string
  limit: number
  offset: number
}
let params = {
  area: '内地',
  limit: 30,
  offset: 0,
}
const radio = ref('内地')
const MvList = ref<MVRankList[]>([])
const getMvTopList = async (params: paramsType) => {
  let res = await getMvRank(params)
  if (res.code != 200) return
  MvList.value = res.data
}

const changeArea = (value: string | number | boolean) => {
  params.area = value as string
  getMvTopList(params)
}
onMounted(() => {
  getMvTopList(params)
})
</script>

<style lang="less" scoped>
.mv_rank_container {
  header {
    display: flex;
    height: 25px;
    align-items: center;
    justify-content: space-between;
  }
  main {
    overflow: hidden;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    .mv_rank_item {
      width: calc(50% - 5px);
      .item_rank {
        width: 35px;
        font-size: 24px;
        color: #999999;
      }
      .item_cover {
        width: 170px;
        height: 96px;
        border-radius: 4px;
        border: 1px solid #f2f2f2;
        cursor: pointer;
      }
      .item_content {
        display: flex;
        height: 90px;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 1em;
      }
    }
  }
}
</style>
