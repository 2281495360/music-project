<template>
  <div class="container">
    <img class="ui tiny rounded image" :src="picUrl" />
    <el-space class="content" direction="vertical" alignment="flex-start">
      <h5>
        <el-text truncated style="width: 200px">{{ name }}</el-text>
      </h5>
      <el-tag type="info" effect="plain" size="small">{{
        secondCategory
      }}</el-tag>
      <el-space style="opacity: 0.5">
        <el-text truncated style="width: 100px">{{ podcastName }}</el-text>
        <span
          ><i class="play circle outline icon"></i
          >{{ useNumberFormat(playCount) }}</span
        >
        <span
          ><i class="clock outline icon"></i
          >{{ useFormatDuring(duration / 1000) }}</span
        >
      </el-space>
    </el-space>
  </div>
</template>

<script lang="ts" setup>
import { useNumberFormat, useFormatDuring } from '@/utils/number'
defineProps<{
  picUrl: string
  playCount: number
  name: string
  duration: number
  secondCategory: string
  podcastName: string
}>()
</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 80px;
  margin-bottom: 10px;
  margin-right: 20px;
  .content {
    margin-left: 10px;
  }
  img:hover {
    cursor: pointer;
    border: 2px solid #409eff;
  }
  &:hover {
    background-color: #ebebeb;
  }
}
</style>
