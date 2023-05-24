<template>
  <header>
    <div class="ui items">
      <div class="item">
        <div style="width: 190px; height: 190px">
          <img
            class="ui rounded bordered image"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </div>
        <div class="content">
          <div class="header">
            <el-tag effect="plain">歌单</el-tag>《中国好声音》第六期
          </div>
          <div class="meta">
            <img
              class="ui avatar image"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <a>Username</a>&nbsp;
            <span>2022-02-17创建</span>
          </div>
          <el-space style="margin-top: 10px">
            <el-button-group>
              <el-button type="primary" round :icon="CaretRight"
                >播放全部</el-button
              >
              <el-tooltip
                content="添加全部到播放列表"
                placement="bottom"
                effect="light"
              >
                <el-button type="primary" round :icon="Plus" />
              </el-tooltip>
            </el-button-group>
            <el-button plain round :icon="Star">收藏</el-button>
            <el-button plain round :icon="Link">分享</el-button>
          </el-space>
          <div class="description">
            <div>
              标签：<a>夜晚</a>&nbsp;&nbsp;
              <span>歌曲：666 &nbsp;&nbsp; 播放：135万</span>
            </div>
          </div>
          <el-collapse>
            <el-collapse-item title="简介：装修声、鸣笛声，声声没办法不入耳;">
              <p>邻居事，室友事，事事没办法不关心。</p>
              <p>听见的声音太多，想听的东西可能就听不见了。</p>
              <p>还耳朵一个清净自在，来一首peace的音乐吧。</p>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </header>
  <main>
    <el-tabs id="tabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="歌曲列表" name="歌曲列表">
        <SongTable></SongTable>
      </el-tab-pane>
      <el-tab-pane label="评论" name="评论">
        <Comment></Comment>
      </el-tab-pane>
      <el-tab-pane label="收藏者" name="收藏者">
        <Collector></Collector>
      </el-tab-pane>
    </el-tabs>
  </main>
</template>

<script lang="ts" setup>
import SongTable from './component/SongTable.vue'
import Comment from './component/Comment.vue'
import Collector from './component/Collector.vue'
import { Star, Link, CaretRight, Plus } from '@element-plus/icons-vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('歌曲列表')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang="less" scoped>
:deep(.el-collapse) {
  border: none;
}
:deep(#tabs .is-active) {
  color: #333333;
  font-weight: bold;
  font-size: 18px;
  transition: 0.1s;
}
:deep(.el-tabs__nav-wrap::after) {
  height: 0px;
}
</style>
