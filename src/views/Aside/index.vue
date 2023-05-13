<template>
  <el-scrollbar height="634px">
    <el-menu
      default-active="1"
      class="menu"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1" id="item">
        <span>发现音乐</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span>视频</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span>播客</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span>排行榜</span>
      </el-menu-item>
      <el-menu-item-group title="我的音乐">
        <el-menu-item index="1-1">
          <el-icon><i class="heart outline icon icon_setting"></i></el-icon>
          我喜欢的音乐
        </el-menu-item>
        <el-menu-item index="1-2">
          <el-icon
            ><i
              class="arrow alternate circle down outline icon icon_setting"
            ></i
          ></el-icon>
          本地与下载
        </el-menu-item>
        <el-menu-item index="1-3">
          <el-icon><i class="history icon icon_setting"></i></el-icon>
          最近播放
        </el-menu-item>
        <el-menu-item index="1-4">
          <el-icon><i class="mixcloud icon icon_setting"></i></el-icon>
          我的音乐云盘
        </el-menu-item>
        <el-menu-item index="1-6">
          <el-icon><i class="star outline icon icon_setting"></i></el-icon>
          我的收藏
        </el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="5">
        <template #title>
          <span>创建的歌单</span>
        </template>
        <el-menu-item index="5-1">item one</el-menu-item>
        <el-menu-item index="5-2">item two</el-menu-item>
        <el-menu-item index="5-3">item three</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>
          <span>收藏的歌单</span>
        </template>
        <el-menu-item index="6-1">item one</el-menu-item>
        <el-menu-item index="6-2">item two</el-menu-item>
        <el-menu-item index="6-3">item three</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.menu {
  border-right: none;
  .icon_setting {
    font-size: 15px;
  }
  :deep(.el-menu-item) {
    height: 40px;
    line-height: 40px;
  }
  :deep(.el-sub-menu__title) {
    height: 40px;
    line-height: 40px;
  }
  :deep(.is-active) {
    background-color: #f6f6f7;
  }
}
</style>
