<template>
  <div class="song_list_cover_wrapper">
    <el-card
      class="song_list_cover_container"
      shadow="never"
      :style="{ 'background-image': `url(${picUrl})` }"
    >
      <header>
        <span style="float: right">
          <i class="headphones icon"></i>
          {{ useNumberFormat(playCount) }}
        </span>
      </header>
      <footer>
        <el-text class="footer_text" truncated></el-text>
        <el-icon><i class="play circle outline icon"></i></el-icon>
      </footer>
    </el-card>
    <div>
      <slot></slot>
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNumberFormat } from '@/utils/number'

defineProps<{
  picUrl: string
  playCount: number
  name: string
}>()
</script>

<style lang="less" scoped>
.song_list_cover_wrapper {
  width: 156px;
  margin-bottom: 20px;
}
.song_list_cover_container {
  height: 156px;
  width: 100%;
  color: #fff;
  margin-bottom: 10px;
  background-size: 100% 100%;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 0.3s;
  }
  header {
    padding: 0 4px;
  }
  footer {
    padding: 0 4px;
    height: 30px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .footer_text {
      width: 80px;
      font-size: 12px;
      color: #fff;
    }
  }
}
:deep(.el-card__body) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0;
}
</style>
