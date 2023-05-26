<template>
  <el-table :data="tableData" stripe style="width: 100%" :show-header="false">
    <el-table-column type="index" width="80" align="center" />
    <el-table-column prop="cover" label="cover" width="85">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-image fit="cover" :src="scope.row.cover" class="img_cover">
            <template #error>
              <div class="image-slot">
                <el-icon><Picture /></el-icon>
              </div>
            </template>
          </el-image>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="name"
      width="300"
      :show-overflow-tooltip="true"
    />
    <el-table-column prop="play" label="play" align="center">
      <template #default="scope">
        <div
          style="display: flex; align-items: center; justify-content: center"
        >
          <el-icon><i class="play circle outline icon"></i></el-icon>
          <span style="margin-left: 4px">{{ scope.row.play }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="like" label="like" align="center">
      <template #default="scope">
        <div
          style="display: flex; align-items: center; justify-content: center"
        >
          <el-icon><i class="thumbs up outline icon"></i></el-icon>
          <span style="margin-left: 4px">{{ scope.row.like }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="date" label="date" align="center" />
    <el-table-column prop="time" label="time" align="center" />
  </el-table>
</template>

<script setup lang="ts">
import { Picture } from '@element-plus/icons-vue'
const tableData = Array(20).fill({
  name: '左手指月',
  cover: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
  play: 666,
  like: '7854',
  date: '2020-03-28',
  time: '09:00',
})
</script>

<style lang="less" scoped>
.img_cover {
  width: 60px;
  height: 60px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
// .demo-image__error .image-slot {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   background: #f5f7fa;
//   color: #909399;
//   font-size: 30px;
// }
// .demo-image__error .image-slot .el-icon {
//   font-size: 30px;
// }
</style>
