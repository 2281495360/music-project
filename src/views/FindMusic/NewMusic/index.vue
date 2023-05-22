<template>
  <div class="new_music_container">
    <header>
      <el-radio-group v-model="radio3" size="small">
        <el-radio-button
          :label="label"
          v-for="label in radioList"
          :key="label"
        />
      </el-radio-group>
      <span>
        <el-button type="primary" size="small" round :icon="VideoPlay"
          >播放全部</el-button
        >
        <el-button round size="small" :icon="FolderAdd">收藏全部</el-button>
      </span>
    </header>
    <main>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        :show-header="true"
        tooltip-effect="light"
      >
        <el-table-column type="index" width="50" />
        <el-table-column label="封面" width="85" align="center">
          <template #default>
            <div style="display: flex; align-items: center">
              <el-image
                fit="cover"
                src="https://p2.music.126.net/ShgYlBj0FkSj956_0aP_7A==/109951168618531481.jpg?param=130y130"
                style="width: 60px; height: 60px; border-radius: 4px"
              >
                <template #error>
                  <div class="image-slot">
                    <el-icon><Picture /></el-icon>
                  </div>
                </template>
              </el-image>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="曲名" width="350" />
        <el-table-column
          prop="author"
          label="歌手"
          width="150"
          show-overflow-tooltip
        />
        <el-table-column prop="album" label="专辑" show-overflow-tooltip />
        <el-table-column prop="time" label="时长" width="80" />
      </el-table>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { VideoPlay, FolderAdd, Picture } from '@element-plus/icons-vue'
const radio3 = ref('全部')
const radioList = ['全部', '华语', '欧美', '韩国', '日本', '小语种']
const tableData = [
  {
    author: '张三',
    name: 'Umbrella',
    album: '不法侵入',
    time: '02:52',
  },
  {
    author: '李四',
    name: '2 O 4 5',
    album: '池中海',
    time: '03:21',
  },
  {
    author: '王五',
    name: '快乐伙计',
    album: '大人的童话大人的童话大人的童话大人的童话大人的童话大人的童话',
    time: '03:55',
  },
  {
    author: '小明',
    name: '字字句句',
    album: '奔跑女孩',
    time: '04:52',
  },
  {
    author: '张三',
    name: 'Umbrella',
    album: '不法侵入',
    time: '02:52',
  },
  {
    author: '李四',
    name: '2 O 4 5',
    album: '池中海',
    time: '03:21',
  },
  {
    author: '王五',
    name: '快乐伙计',
    album: '大人的童话大人的童话大人的童话大人的童话大人的童话大人的童话',
    time: '03:55',
  },
  {
    author: '小明',
    name: '字字句句',
    album: '奔跑女孩',
    time: '04:52',
  },
]
</script>

<style lang="less" scoped>
.new_music_container {
  display: flex;
  flex-direction: column;
  main {
    margin-top: 10px;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
