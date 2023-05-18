<template>
  <div class="video_container">
    <header>
      <el-button round plain
        >全部视频<el-icon class="el-icon--right"><ArrowRight /></el-icon
      ></el-button>
      <el-radio-group v-model="filterRadio" size="small" class="group">
        <el-radio label="hot">全部视频</el-radio>
        <template v-for="item in filterList" :key="item">
          <el-divider direction="vertical" style="height: 1rem" />
          <el-radio :label="item" style="width: 44px">{{ item }}</el-radio>
        </template>
      </el-radio-group>
    </header>
    <main>
      <div class="grid-content ep-bg-purple" v-for="item in 24" :key="item" />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
const filterList = ['现场', '翻唱', '舞蹈', 'MV', '生活', '游戏']
const filterRadio = ref('全部视频')
</script>

<style lang="less" scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.ep-bg-purple {
  height: 154px;
  width: 272px;
  //background-color: #44aaf8;
  //border: 1px solid #44aaf8;
  background-image: url(https://p1.music.126.net/uFWcdYyjcqvM5JFZ5nsPGw==/1365593453032084.jpg?param=140y140);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.video_container {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  main {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 34px;
    margin-top: 10px;
  }
}
:deep(.el-radio__input) {
  display: none;
}
:deep(.el-radio) {
  margin-right: 0px;
  justify-content: center;
}
:deep(.el-radio__input.is-checked + .el-radio__label) {
  background-color: #f5fbff;
}
:deep(.el-radio__label) {
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 12px;
}
:deep(.el-radio__label:hover) {
  color: #44aaf8;
}
</style>
