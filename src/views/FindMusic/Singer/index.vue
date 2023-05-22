<template>
  <header class="singer_header_container">
    <div style="display: flex">
      <span>语种：</span>
      <el-radio-group v-model="languageRadio" size="small">
        <el-radio label="1">全部</el-radio>
        <template v-for="item in languageList" :key="item">
          <el-divider direction="vertical" style="height: 1rem" />
          <el-radio :label="item">{{ item }}</el-radio>
        </template>
      </el-radio-group>
    </div>
    <div style="display: flex">
      <span>分类：</span>
      <el-radio-group v-model="classificationRadio" size="small">
        <el-radio label="1">全部</el-radio>
        <template v-for="item in classificationList" :key="item">
          <el-divider direction="vertical" style="height: 1rem" />
          <el-radio :label="item">{{ item }}</el-radio>
        </template>
      </el-radio-group>
    </div>
    <div style="display: flex">
      <div>筛选：</div>
      <el-radio-group v-model="filterRadio" size="small" class="group">
        <el-radio label="hot">热门</el-radio>
        <template v-for="item in filterLetterList" :key="item">
          <el-divider direction="vertical" style="height: 1rem" />
          <el-radio :label="item" style="width: 44px">{{ item }}</el-radio>
        </template>
      </el-radio-group>
    </div>
  </header>
  <main class="singer_header_content">
    <div class="singer_item" v-for="item in 16" :key="item">
      <el-image
        class="singer_item_image"
        src="https://p1.music.126.net/whG7pbsbd1akKtOE7V3R_Q==/109951168299161319.jpg?param=130y130"
        ><template #error>
          <div class="image-slot">
            <el-icon><Picture /></el-icon>
          </div>
        </template>
        <template #placeholder>
          <div>Loading...</div>
        </template>
      </el-image>
      <div>孙楠</div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { Picture } from '@element-plus/icons-vue'
const languageList = ['华语', '欧美', '日本', '韩国', '其它']
const classificationList = ['男歌手', '女歌手', '乐队组合']
const filterLetterList = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]
const languageRadio = ref('1')
const classificationRadio = ref('1')
const filterRadio = ref('hot')
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
