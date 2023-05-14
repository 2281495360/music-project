<template>
  <div>
    <el-space size="large">
      <el-tag effect="plain" type="info" size="small">极高</el-tag>
      <el-button link>
        <el-icon size="large"><Headset /></el-icon>
      </el-button>
      <el-button link>
        <el-icon size="large"><Mic /></el-icon>
      </el-button>
      <el-button link>
        <el-icon size="large"><Expand /></el-icon>
      </el-button>
    </el-space>
  </div>
</template>

<script lang="ts" setup>
import { Expand, Headset, Mic } from '@element-plus/icons-vue'
</script>

<style lang="less" scoped></style>
