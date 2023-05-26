<template>
  <div class="mv_detail_container">
    <main>
      <h3>视频详情</h3>
      <div class="video_container"></div>
      <div class="video_detail_container">
        <header>
          <div>
            <img
              class="ui mini avatar image"
              src="https://semantic-ui.com/images/avatar/large/jenny.jpg"
            />
            <span>Username</span>
          </div>
          <el-button type="danger" :icon="Plus" round plain>关注</el-button>
        </header>
        <h2 class="ui header">MV标题标题</h2>
        <div>
          <el-text type="info">
            发布：2020-08-24&nbsp;&nbsp;&nbsp;&nbsp;播放：31万次
          </el-text>
        </div>
        <div style="margin-top: 10px">
          <el-space>
            <el-tag effect="light" round>国漫</el-tag>
            <el-tag effect="light" round>ACG音乐</el-tag>
            <el-tag effect="light" round>二次元</el-tag>
            <el-tag effect="light" round>动漫混剪</el-tag>
          </el-space>
        </div>
        <el-space style="margin-top: 20px">
          <el-button plain round>
            <el-icon><i class="thumbs up outline icon"></i></el-icon>
            赞(299)</el-button
          >
          <el-button plain round :icon="Star">收藏(366)</el-button>
          <el-button plain round :icon="Link">分享(20)</el-button>
        </el-space>
      </div>
    </main>
    <aside>
      <h3>相关推荐</h3>
      <div class="ui items" style="margin: 0">
        <div class="item" v-for="item in 5" :key="item">
          <div class="ui small image">
            <img
              src="https://img1.baidu.com/it/u=22110622,3738533906&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
            />
          </div>
          <div class="content" style="font-size: 12px; padding-left: 6px">
            <div
              class="ui sub header"
              style="font-size: 12px"
              id="recommend_item_header"
            >
              箭头谷露营箭头谷露营箭头谷露营箭头谷露营
            </div>
            <el-text class="meta" truncated
              >by <a>十三叔叔说游戏十三叔叔说游戏</a></el-text
            >
            <div class="extra" style="margin: 0">
              <span>
                <el-icon><View /></el-icon>12345
              </span>
              <span>
                <el-icon><Timer /></el-icon>03:25
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { View, Timer, Plus, Star, Link } from '@element-plus/icons-vue'
</script>

<style lang="less" scoped>
.mv_detail_container {
  display: flex;
  width: 100%;
  column-gap: 1em;
  .video_container {
    width: 600px;
    background-color: #ccc;
    aspect-ratio: 16/9;
  }
  .video_detail_container {
    margin-top: 10px;
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  aside {
    width: 270px;
    #recommend_item_header {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      max-width: 100%;
      margin: 0 auto;
    }
  }
}
</style>
