<template>
  <header class="singer_header_container">
    <div style="display: flex">
      <span>语种：</span>
      <el-radio-group v-model="languageRadio" size="small" @change="changeArea">
        <el-radio label="-1">全部</el-radio>
        <template v-for="item in languageList.keys()" :key="item">
          <el-divider direction="vertical" style="height: 1rem" />
          <el-radio :label="item">{{ languageList.get(item) }}</el-radio>
        </template>
      </el-radio-group>
    </div>
    <div style="display: flex">
      <span>分类：</span>
      <el-radio-group
        v-model="classificationRadio"
        size="small"
        @change="changeType"
      >
        <el-radio label="-1">全部</el-radio>
        <template v-for="item in classificationList.keys()" :key="item">
          <el-divider direction="vertical" style="height: 1rem" />
          <el-radio :label="item">{{ classificationList.get(item) }}</el-radio>
        </template>
      </el-radio-group>
    </div>
    <div style="display: flex">
      <div>筛选：</div>
      <el-radio-group
        v-model="filterRadio"
        size="small"
        class="group"
        @change="changeInitial"
      >
        <el-radio label="-1">热门</el-radio>
        <template v-for="item in filterLetterList" :key="item">
          <el-divider direction="vertical" style="height: 1rem" />
          <el-radio :label="item" style="width: 44px">{{ item }}</el-radio>
        </template>
      </el-radio-group>
    </div>
  </header>
  <main class="singer_header_content">
    <div class="singer_item" v-for="item in singerListItem" :key="item.id">
      <el-image class="singer_item_image" :src="item.picUrl + '?param=130y130'"
        ><template #error>
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
      <footer style="width: 130px">
        <el-text truncated>{{ item.name }}</el-text>
      </footer>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { Picture, Loading } from '@element-plus/icons-vue'
import type { Artist } from '@/models/singer'
import { getSingerList } from '@/api/singer'
import {
  classificationList,
  languageList,
  filterLetterList,
} from '@/constants/index'
interface SingerListParams {
  type: number
  area: number
  initial: number
  offset: number
}
const getSingerListParams = reactive<SingerListParams>({
  type: -1,
  area: -1,
  initial: -1,
  offset: 0,
})
const singerListItem = ref<Artist[]>([])
const languageRadio = ref('-1')
const classificationRadio = ref('-1')
const filterRadio = ref('-1')
const getSinger = async (params: SingerListParams) => {
  let res = await getSingerList(params)
  if (res.code !== 200) return
  singerListItem.value = res.artists
}
const changeArea = (value: number | string | boolean) => {
  getSingerListParams.area = value as number
  getSinger(getSingerListParams)
}
const changeType = (value: number | string | boolean) => {
  getSingerListParams.type = value as number
  getSinger(getSingerListParams)
}
const changeInitial = (value: number | string | boolean) => {
  getSingerListParams.initial = value as number
  getSinger(getSingerListParams)
}
onMounted(() => {
  getSinger(getSingerListParams)
})
</script>

<style lang="less" scoped>
.singer_header_container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.singer_header_content {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 19px;
  .singer_item {
    .singer_item_image {
      width: 130px;
      height: 130px;
      border-radius: 4px;
      border: 1px solid #eeeeee;
      &:hover {
        margin-top: -4px;
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }
}
:deep(.el-radio__input) {
  display: none;
}
:deep(.el-radio) {
  margin-right: 0px;
  justify-content: center;
}
:deep(.el-radio__input.is-checked + .el-radio__label) {
  background-color: #f5fbff;
}
:deep(.el-radio__label) {
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 12px;
}
:deep(.el-radio__label:hover) {
  color: #44aaf8;
}
:deep(.el-radio-group) {
  flex: 1;
  gap: 8px;
}
</style>
