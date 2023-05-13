<template>
  <div>
    <header>
      <el-button style="font-size: 18px" link
        ><b>推荐歌单<i class="angle right icon"></i></b
      ></el-button>
    </header>
    <main style="margin-top: 10px">
      <el-row justify="space-between" v-for="item in 3" :key="item">
        <el-col :span="24 / 5" v-for="item in 5" :key="item"
          ><div class="grid-content ep-bg-purple"
        /></el-col>
      </el-row>
    </main>
  </div>
</template>

<script lang="ts" setup></script>

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
.ep-bg-purple {
  background-color: #b1bece;
}
.grid-content {
  border-radius: 4px;
  min-height: 156px;
  min-width: 156px;
}
</style>
