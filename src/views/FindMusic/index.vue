<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-scrollbar height="550px">
      <el-tab-pane label="个性推荐" name="个性推荐">
        <Recommend></Recommend>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="歌单">
        <SongList></SongList>
      </el-tab-pane>
      <el-tab-pane label="歌手" name="歌手">
        <Singer></Singer>
      </el-tab-pane>
      <el-tab-pane label="最新音乐" name="最新音乐">
        <NewMusic></NewMusic>
      </el-tab-pane>
    </el-scrollbar>
  </el-tabs>
</template>
<script lang="ts" setup>
import Recommend from './Recommend/index.vue'
import SongList from './SongList/index.vue'
import Singer from './Singer/index.vue'
import NewMusic from './NewMusic/index.vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('个性推荐')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style lang="less" scoped>
.demo-tabs > .el-tabs__content {
  width: 100%;
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
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
