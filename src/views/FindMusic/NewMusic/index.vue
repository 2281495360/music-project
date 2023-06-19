<template>
  <div class="new_music_container">
    <header>
      <el-radio-group v-model="radio" size="small" @change="changeType">
        <el-radio-button
          :label="label"
          v-for="label in radioList.keys()"
          :key="label"
          >{{ radioList.get(label) }}
        </el-radio-button>
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
        :data="newMusicList"
        stripe
        style="width: 100%"
        :show-header="true"
        tooltip-effect="light"
      >
        <el-table-column type="index" width="50" />
        <el-table-column label="封面" width="85" align="center">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-image
                fit="cover"
                :src="scope.row.album.blurPicUrl"
                style="width: 60px; height: 60px; border-radius: 4px"
              >
                <template #error>
                  <div class="image-slot">
                    <el-icon><Picture /></el-icon>
                  </div>
                </template>
                <template #placeholder>
                  <el-icon class="is-loading">
                    <Loading />
                  </el-icon>
                </template>
              </el-image>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="曲名" width="300" />
        <el-table-column label="歌手" width="200" show-overflow-tooltip>
          <template #default="scope">
            <span v-for="(artist, index) in scope.row.artists" :key="artist.id">
              {{ artist.name
              }}{{ index < scope.row.artists.length - 1 ? '/' : '' }}
            </span>
            <!-- <el-space :size="0" spacer="/">
              <el-button
                v-for="artist in scope.row.artists"
                :key="artist.id"
                size="small"
                link
                >{{ artist.name }}</el-button
              >
            </el-space> -->
          </template>
        </el-table-column>
        <el-table-column label="专辑" show-overflow-tooltip>
          <template #default="scope">
            {{ scope.row.album.name }}
          </template>
        </el-table-column>
        <el-table-column label="时长" width="80">
          <template #default="scope">
            {{ useFormatDuring(Math.floor(scope.row.duration / 1000)) }}
          </template>
        </el-table-column>
      </el-table>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { VideoPlay, FolderAdd, Picture, Loading } from '@element-plus/icons-vue'
import { useFormatDuring } from '@/utils/number'
import { getNewMusicByType } from '@/api/newMusic'
import type { NewMusicItem } from '@/models/newMusic'
const radio = ref(0)
const radioList = new Map([
  [0, '全部'],
  [7, '华语'],
  [96, '欧美'],
  [8, '日本'],
  [16, '韩国'],
])
const newMusicList = ref<NewMusicItem[]>([])
const getNewMusicList = async (type: number = 0) => {
  let res = await getNewMusicByType(type)
  if (res.code !== 200) return
  newMusicList.value = res.data
}
const changeType = (value: string | number | boolean) => {
  getNewMusicList(value as number)
}
onMounted(() => {
  getNewMusicList(0)
})
</script>

<style lang="less" scoped>
.new_music_container {
  display: flex;
  flex-direction: column;
  main {
    margin-top: 10px;
  }
  header {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
:deep(.el-image:hover) {
  cursor: pointer;
}
</style>
