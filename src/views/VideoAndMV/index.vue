<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-scrollbar height="550px">
      <el-tab-pane label="视频" name="视频">
        <VideoComponent></VideoComponent>
      </el-tab-pane>
      <el-tab-pane label="MV" name="MV"> <MV></MV> </el-tab-pane>
      <el-tab-pane label="MV排行榜" name="MvRank">
        <MvRank></MvRank>
      </el-tab-pane>
    </el-scrollbar>
  </el-tabs>
</template>

<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus'
import VideoComponent from './VideoComponent/index.vue'
import MV from './MV/index.vue'
import MvRank from './MvRank/index.vue'
const activeName = ref('视频')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang="less" scoped>
:deep(.is-active) {
  color: #333333;
  font-weight: bold;
  font-size: 18px;
  transition: 0.1s;
}
:deep(.el-tabs__nav-wrap::after) {
  height: 0px;
}
</style>
