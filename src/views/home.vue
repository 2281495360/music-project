<template>
  <div class="box">
    <el-container>
      <el-header class="box_header">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px" class="box_aside">
          <Aside></Aside>
        </el-aside>
        <el-main class="box_main">
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer class="box_footer">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from '@/views/Header/index.vue'
import Aside from '@/views/Aside/index.vue'
import Footer from '@/views/Footer/index.vue'
</script>

<style lang="less" scoped>
.box {
  min-height: 770px;
  width: 1124px;
  min-width: 1124px;
  background: #fff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;
  .box_header {
    height: 62px;
    background-image: linear-gradient(to top, #00c6fb 0%, #56b5fb 100%);
    color: #fff;
    border-bottom: 1px solid #e0e0e0;
  }

  .box_footer {
    height: 74px;
    border-top: 1px solid #e0e0e0;
  }

  .box_aside {
    height: calc(770px - 62px - 74px);
    border-right: 1px solid #e0e0e0;
  }
  .box_main {
    height: calc(770px - 62px - 74px);
  }
  :deep(.el-main) {
    padding-top: 10px;
  }
}
</style>
