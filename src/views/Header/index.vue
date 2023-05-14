<template>
  <div class="container">
    <div class="logo">logo</div>
    <div class="container_right">
      <el-space>
        <el-button :icon="ArrowLeft" circle size="small" />
        <el-button :icon="ArrowRight" circle size="small" />
        <el-input
          class="search_input"
          v-model="searchInput"
          size="small"
          placeholder="搜你想听..."
          :prefix-icon="Search"
        />
      </el-space>
      <el-space>
        <i class="adjust icon"></i>
        <i class="envelope outline icon"></i>
        <img
          class="ui avatar image"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span>UserName</span>
      </el-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight, Search } from '@element-plus/icons-vue'
const searchInput = ref('')
</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100%;

  .logo {
    width: 180px;
    border-right: 1px solid greenyellow;
  }

  .container_right {
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding-left: 20px;
    .search_input {
      height: 30px;
      width: 300px;
    }
    :deep(.el-input__wrapper) {
      border-radius: 30px;
      border: 0;
    }
  }
}
</style>
