<template>
  <div class="wrapper">
    <el-space size="large">
      <el-button link>
        <el-icon size="large"><RefreshRight /></el-icon>
      </el-button>
      <el-button link>
        <el-icon size="24px"><CaretLeft /></el-icon>
      </el-button>
      <el-button link>
        <el-icon size="36px"><VideoPlay /></el-icon>
      </el-button>
      <el-button link>
        <el-icon size="24px"><CaretRight /></el-icon>
      </el-button>
      <el-button link>
        <el-icon size="large"><Document /></el-icon>
      </el-button>
    </el-space>
    <div>
      <el-progress style="width: 430px" :percentage="50">
        <el-button link size="small" text>02:07/03:11</el-button>
      </el-progress>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  VideoPlay,
  CaretLeft,
  CaretRight,
  Document,
  RefreshRight,
} from '@element-plus/icons-vue'
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
