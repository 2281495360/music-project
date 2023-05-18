<template>
  <div class="ui segment wrapper">
    <div class="content">
      <img
        class="ui small image"
        src="https://p2.music.126.net/msnuUnhDv5c0foGWFXiUKg==/109951168185283405.jpg?param=177y177"
      />
      <div class="wrapper_right_box">
        <el-tag effect="plain" size="large" type="warning" round
          ><i class="chess queen icon"></i>精品歌单</el-tag
        >
        <h4 style="margin-top: 20px; color: #fff">
          国风新潮大赏|歌声岂合世间闻
        </h4>
      </div>
    </div>
  </div>
  <div class="radio_box">
    <el-button round plain
      >流行<el-icon class="el-icon--right"><ArrowRight /></el-icon
    ></el-button>
    <el-radio-group v-model="radio" size="small">
      <el-radio-button label="华语" />
      <el-radio-button label="流行" />
      <el-radio-button label="古典" />
      <el-radio-button label="ACG" />
      <el-radio-button label="摇滚" />
      <el-radio-button label="民谣" />
    </el-radio-group>
  </div>
  <el-row justify="space-between" v-for="item in 3" :key="item">
    <el-col :span="24 / 5" v-for="item in 5" :key="item"
      ><SongListCover
        ><el-tag effect="plain" type="info" size="small"
          >3D环绕</el-tag
        ></SongListCover
      ></el-col
    >
  </el-row>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import SongListCover from '@/components/SongListCover.vue'
const radio = ref('流行')
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  padding: 0;
  border: none;
  overflow: hidden;
  border-radius: 8px;
  background-image: url(https://p2.music.126.net/msnuUnhDv5c0foGWFXiUKg==/109951168185283405.jpg?param=177y177);
  .content {
    display: flex;
    padding: 10px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    backdrop-filter: blur(20px);
    .wrapper_right_box {
      margin-left: 10px;
      padding-top: 20px;
    }
  }
}
.radio_box {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
