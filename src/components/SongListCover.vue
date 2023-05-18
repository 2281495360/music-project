<template>
  <div class="song_list_cover_wrapper">
    <el-card class="song_list_cover_container" shadow="never">
      <header>
        <span style="float: right">
          <i class="headphones icon"></i>
          666万
        </span>
      </header>
      <footer>
        <el-text class="footer_text" truncated>云音乐私人频道</el-text>
        <el-icon><i class="play circle outline icon"></i></el-icon>
      </footer>
    </el-card>
    <div>
      <slot></slot>
      <span>抖音热歌</span>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
  background-image: url(https://p2.music.126.net/cFEn-P8Dr4_oVJqxXCQjXQ==/7931876885323415.jpg?param=140y140);
  background-size: 100% 100%;
  &:hover {
    border: #409eff 2px solid;
    cursor: pointer;
    transition: 0.1s;
  }
  header {
    background: rgb(144, 147, 153);
    background: -moz-linear-gradient(
      180deg,
      rgba(144, 147, 153, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    background: -webkit-linear-gradient(
      180deg,
      rgba(144, 147, 153, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    background: linear-gradient(
      180deg,
      rgba(144, 147, 153, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    padding: 0 4px;
    height: 30px;
    line-height: 30px;
  }
  footer {
    padding: 0 4px;
    height: 30px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(144, 147, 153);
    background: -moz-linear-gradient(
      0deg,
      rgba(144, 147, 153, 1) 30%,
      rgba(0, 0, 0, 0) 100%
    );
    background: -webkit-linear-gradient(
      0deg,
      rgba(144, 147, 153, 1) 30%,
      rgba(0, 0, 0, 0) 100%
    );
    background: linear-gradient(
      0deg,
      rgba(144, 147, 153, 1) 30%,
      rgba(0, 0, 0, 0) 100%
    );
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
