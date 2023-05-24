<template>
  <el-table
    :data="tableData"
    stripe
    border
    style="width: 100%"
    size="small"
    tooltip-effect="light"
  >
    <el-table-column type="index" align="center" />
    <el-table-column label="操作" align="center" width="68">
      <template #default="scope">
        <el-button link @click="handleStart(scope.$index, scope.row)">
          <el-icon>
            <i class="heart outline icon"></i>
          </el-icon>
        </el-button>
        <el-button
          link
          v-if="false"
          @click="handleStart(scope.$index, scope.row)"
        >
          <el-icon color="red">
            <i class="heart icon"></i>
          </el-icon>
        </el-button>
        <el-button link @click="handleDownLoad(scope.$index, scope.row)"
          ><el-icon><Download /></el-icon
        ></el-button>
      </template>
    </el-table-column>
    <el-table-column prop="title" label="标题" min-width="350" />
    <el-table-column
      prop="singer"
      label="歌手"
      width="170"
      :show-overflow-tooltip="true"
    />
    <el-table-column
      prop="album"
      label="专辑"
      width="170"
      :show-overflow-tooltip="true"
    />
    <el-table-column prop="time" label="时间" width="50" />
  </el-table>
</template>

<script lang="ts" setup>
import { Download } from '@element-plus/icons-vue'
interface Song {
  title: string
  singer: string
  album: string
  time: string
}
const tableData = Array(20).fill({
  title: '红豆',
  singer: '要不要买菜',
  album: '红豆',
  time: '03:54',
})
const handleStart = (index: number, row: Song) => {
  console.log(index, row)
}
const handleDownLoad = (index: number, row: Song) => {
  console.log(index, row)
}
</script>

<style lang="less" scoped></style>
