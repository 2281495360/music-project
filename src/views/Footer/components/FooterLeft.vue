<template>
  <div class="container">
    <img
      class="ui rounded image music_image"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
    <div class="content">
      <header style="display: flex">
        <el-text class="music_title" truncated
          >Squeezed by parent element</el-text
        >
        <el-button link>
          <el-icon>
            <i class="heart outline icon"></i>
          </el-icon>
        </el-button>
        <el-button link v-if="false">
          <el-icon color="red">
            <i class="heart icon"></i>
          </el-icon>
        </el-button>
      </header>
      <div>
        <el-button size="small" link>葛东琪</el-button>
        <el-button size="small" link>张含韵</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  .music_image {
    width: 50px;
  }
  .content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    .music_title {
      font-size: 16px;
      width: 150px;
    }
    .el-button + .el-button {
      margin-left: 0;
    }
  }
}
</style>
