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
  <el-button round plain
    >流行<el-icon class="el-icon--right"><ArrowRight /></el-icon
  ></el-button>
  <GridItem :title="title" :row="row" :col="col">
    <div class="grid-content ep-bg-purple" />
  </GridItem>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import GridItem from '@/components/GridItem.vue'
const title = ref('流行')
const row = ref(3)
const col = ref(5)
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
.grid-content {
  border-radius: 4px;
  min-height: 156px;
  min-width: 156px;
}
.ep-bg-purple {
  background-color: #b1bece;
}
</style>
