<template>
  <SongListDetailHead></SongListDetailHead>
  <main>
    <el-tabs id="tabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="声音(483)" name="声音">
        <Sound></Sound>
      </el-tab-pane>
      <el-tab-pane label="收藏者" name="收藏者">
        <Collector></Collector>
      </el-tab-pane>
    </el-tabs>
  </main>
</template>

<script setup lang="ts">
import SongListDetailHead from '@/components/SongListDetailHead.vue'
import Sound from './component/Sound.vue'
import Collector from '../SongListDetail/component/Collector.vue'
import type { TabsPaneContext } from 'element-plus'
const activeName = ref('声音')

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
