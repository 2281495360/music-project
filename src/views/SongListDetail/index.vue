<template>
  <SongListDetailHead>
    <template #createTime>
      <span>2022-02-17创建</span>
    </template>
    <template #songAndPlayCount>
      <span>歌曲：666 &nbsp;&nbsp; 播放：135万</span>
    </template>
  </SongListDetailHead>
  <main>
    <el-tabs id="tabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="歌曲列表" name="歌曲列表">
        <SongTable></SongTable>
      </el-tab-pane>
      <el-tab-pane label="评论" name="评论">
        <Comment></Comment>
      </el-tab-pane>
      <el-tab-pane label="收藏者" name="收藏者">
        <Collector></Collector>
      </el-tab-pane>
    </el-tabs>
  </main>
</template>

<script lang="ts" setup>
import SongListDetailHead from '@/components/SongListDetailHead.vue'
import SongTable from './component/SongTable.vue'
import Comment from './component/Comment.vue'
import Collector from './component/Collector.vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('歌曲列表')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang="less" scoped>
:deep(.el-collapse) {
  border: none;
}
:deep(#tabs .is-active) {
  color: #333333;
  font-weight: bold;
  font-size: 18px;
  transition: 0.1s;
}
:deep(.el-tabs__nav-wrap::after) {
  height: 0px;
}
</style>
