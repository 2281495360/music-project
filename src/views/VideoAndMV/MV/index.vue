<template>
  <header class="mv_header_container">
    <div style="display: flex">
      <span>地区：</span>
      <el-radio-group v-model="regionRadio" size="small">
        <el-radio label="全部">全部</el-radio>
        <template v-for="item in regionList" :key="item">
          <el-divider direction="vertical" style="height: 1rem" />
          <el-radio :label="item">{{ item }}</el-radio>
        </template>
      </el-radio-group>
    </div>
    <div style="display: flex">
      <span>类型：</span>
      <el-radio-group v-model="classificationRadio" size="small">
        <el-radio label="全部">全部</el-radio>
        <template v-for="item in classificationList" :key="item">
          <el-divider direction="vertical" style="height: 1rem" />
          <el-radio :label="item">{{ item }}</el-radio>
        </template>
      </el-radio-group>
    </div>
    <div style="display: flex">
      <div>排序：</div>
      <el-radio-group v-model="orderRadio" size="small" class="group">
        <el-radio label="上升最快">上升最快</el-radio>
        <template v-for="item in orderList" :key="item">
          <el-divider direction="vertical" style="height: 1rem" />
          <el-radio :label="item" style="width: 44px">{{ item }}</el-radio>
        </template>
      </el-radio-group>
    </div>
  </header>
  <main>
    <div v-for="mv in mvList" :key="mv.id" class="mv_item">
      <el-image
        lazy
        :src="mv.cover"
        fit="cover"
        class="mv_cover"
        :alt="mv.name"
      >
        <template #placeholder>
          <div class="image-slot">Loading<span class="dot">...</span></div>
        </template>
      </el-image>
      <div class="mv_title">
        <el-text truncated style="width: 180px">{{ mv.name }}</el-text>
        <div class="mv_paly_count">
          <el-icon><VideoPlay /></el-icon>
          <span>{{ useNumberFormat(mv.playCount) }}</span>
        </div>
      </div>
      <div>
        <el-button type="info" link>{{ mv.artistName }}</el-button>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { VideoPlay } from '@element-plus/icons-vue'
import { useNumberFormat } from '@/utils/number'
import { getMV } from '@/api/video'
import type { Datum } from '@/models/mv'
export interface MvParamsType {
  area: string
  type: string
  order: string
  limit: number
  offset: number
}
const regionList = ['内地', '港台', '欧美', '韩国', '日本']
const classificationList = ['官方版', '原声', '现场版', '网易出品']
const orderList = ['最热', '最新']
const regionRadio = ref('全部')
const classificationRadio = ref('全部')
const orderRadio = ref('上升最快')
const mvParams = {
  area: regionRadio.value,
  type: classificationRadio.value,
  order: orderRadio.value,
  limit: 30,
  offset: 0,
}
const mvList = ref<Datum[]>([])
const getMvByFilter = async (params: MvParamsType) => {
  let res = await getMV(params)
  if (res.code != 200) return
  mvList.value = res.data
}
watchEffect(() => {
  let params = {
    area: regionRadio.value,
    type: classificationRadio.value,
    order: orderRadio.value,
    limit: 30,
    offset: 0,
  }
  getMvByFilter(params)
})
onMounted(() => {
  getMvByFilter(mvParams)
})
</script>

<style lang="less" scoped>
.mv_header_container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 10px;
  margin-top: 10px;
  .mv_item {
    width: 272px;
    margin-bottom: 10px;
    .mv_cover {
      width: 100%;
      height: 153px;
      border-radius: 6px;
      border: 1px solid #f2f2f2;
    }
    .mv_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .mv_paly_count {
        display: flex;
        align-items: center;
        column-gap: 2px;
      }
    }
    &:hover {
      transform: translateY(-4px);
      transition: 0.3s;
      cursor: pointer;
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
