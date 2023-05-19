<template>
  <header class="mv_header_container">
    <div style="display: flex">
      <span>地区：</span>
      <el-radio-group v-model="regionRadio" size="small">
        <el-radio label="1">全部</el-radio>
        <template v-for="item in regionList" :key="item">
          <el-divider direction="vertical" style="height: 1rem" />
          <el-radio :label="item">{{ item }}</el-radio>
        </template>
      </el-radio-group>
    </div>
    <div style="display: flex">
      <span>类型：</span>
      <el-radio-group v-model="classificationRadio" size="small">
        <el-radio label="1">全部</el-radio>
        <template v-for="item in classificationList" :key="item">
          <el-divider direction="vertical" style="height: 1rem" />
          <el-radio :label="item">{{ item }}</el-radio>
        </template>
      </el-radio-group>
    </div>
    <div style="display: flex">
      <div>排序：</div>
      <el-radio-group v-model="orderRadio" size="small" class="group">
        <el-radio label="hot">热门</el-radio>
        <template v-for="item in orderList" :key="item">
          <el-divider direction="vertical" style="height: 1rem" />
          <el-radio :label="item" style="width: 44px">{{ item }}</el-radio>
        </template>
      </el-radio-group>
    </div>
  </header>
  <main>
    <div class="grid-content ep-bg-purple" v-for="item in 24" :key="item" />
  </main>
</template>

<script lang="ts" setup>
const regionList = ['内地', '港台', '欧美', '韩国', '日本']
const classificationList = ['官方版', '原声', '现场版', '网易出品']
const orderList = ['上升最快', '最热', '最新']
const regionRadio = ref('1')
const classificationRadio = ref('1')
const orderRadio = ref('hot')
</script>

<style lang="less" scoped>
.mv_header_container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.ep-bg-purple {
  height: 154px;
  width: 272px;
  background-image: url(https://p1.music.126.net/uFWcdYyjcqvM5JFZ5nsPGw==/1365593453032084.jpg?param=140y140);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
main {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 34px;
  margin-top: 10px;
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
