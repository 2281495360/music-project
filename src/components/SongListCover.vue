<template>
  <div class="song_list_cover_wrapper">
    <el-card
      class="song_list_cover_container"
      shadow="never"
      :style="{ 'background-image': `url(${picUrl})` }"
    >
      <header>
        <span style="float: right" v-if="playCount !== 0">
          <i class="headphones icon"></i>
          {{ useNumberFormat(playCount) }}
        </span>
        <span style="float: right" v-else>
          <i class="star outline icon"></i>
          {{ useNumberFormat(subCount || 0) }}
        </span>
      </header>
      <div class="paly_icon">
        <svg
          t="1686835064925"
          class="icon"
          viewBox="0 0 1085 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="26384"
          width="50"
          height="50"
        >
          <path
            d="M546.904228 18.10573c-277.76918 0-502.94529 225.17611-502.94529 502.94529 0 277.77164 225.17488 502.94775 502.94529 502.94775 277.76795 0 502.94529-225.17611 502.94529-502.94775C1049.849518 243.28307 824.672178 18.10573 546.904228 18.10573L546.904228 18.10573zM546.904228 973.701659c-249.992631 0-452.651868-202.659237-452.651868-452.651868 0-249.990172 202.659237-452.649408 452.651868-452.649408s452.650638 202.659237 452.650638 452.649408C999.554866 771.042422 796.896859 973.701659 546.904228 973.701659L546.904228 973.701659zM775.203924 485.406478c-78.267962-53.25591-220.1919-132.967608-301.004232-182.358388-33.132146-20.893592-60.993549-12.502952-63.667043 24.399633-1.938099 98.840588 0 289.550264 0 390.101445 1.681079 37.462125 34.709926 42.403293 63.37559 27.362121 80.72133-48.906255 219.456505-132.95777 300.588574-182.112436C773.968017 562.476656 836.097862 528.305364 775.203924 485.406478L775.203924 485.406478z"
            fill="#21bffb"
            p-id="26385"
          ></path>
        </svg>
      </div>
      <footer>
        <el-text class="footer_text" truncated></el-text>
        <el-icon><i class="play circle outline icon"></i></el-icon>
      </footer>
    </el-card>
    <div class="title">
      <slot></slot>
      {{ name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNumberFormat } from '@/utils/number'

defineProps<{
  picUrl: string
  playCount: number
  name: string
  subCount?: number
}>()
</script>

<style lang="less" scoped>
.song_list_cover_wrapper {
  width: 156px;
  margin-bottom: 20px;
  header {
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
.song_list_cover_container {
  height: 156px;
  width: 100%;
  color: #fff;
  margin-bottom: 10px;
  background-size: 100% 100%;
  display: flex;
  &:hover {
    cursor: pointer;
    .paly_icon {
      opacity: 1;
    }
  }
  .paly_icon {
    width: 50px;
    height: 50px;
    align-self: center;
    opacity: 0;
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
