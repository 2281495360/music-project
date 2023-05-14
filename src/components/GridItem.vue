<template>
  <div>
    <header>
      <el-button style="font-size: 18px" link
        ><b>{{ grid.title }}<i class="angle right icon"></i></b
      ></el-button>
    </header>
    <main style="margin-top: 10px">
      <el-row justify="space-between" v-for="item in grid.row" :key="item">
        <el-col :span="24 / grid.col" v-for="item in grid.col" :key="item"
          ><slot
        /></el-col>
      </el-row>
    </main>
  </div>
</template>

<script lang="ts" setup>
const grid = defineProps({
  row: {
    type: Number,
    required: true,
    default: 1,
  },
  col: {
    type: Number,
    required: true,
    default: 5,
  },
  title: {
    type: String,
    required: true,
    default: '标题',
  },
})
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
</style>
