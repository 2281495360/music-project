<template>
  <el-scrollbar>
    <div>
      <h3>官方榜</h3>
      <div class="ui relaxed items">
        <div class="item" v-for="item in 4" :key="item">
          <div class="image img_radius">
            <img
              src="
https://p2.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg?param=150y150"
            />
          </div>
          <div class="middle aligned content">
            <el-table
              :data="tableData"
              stripe
              :show-header="false"
              style="width: 100%; border-top: 1px solid #ebeef5"
              size="small"
            >
              <el-table-column type="index" align="center" width="50" />
              <el-table-column prop="name" label="name" />
              <el-table-column
                prop="singer"
                align="right"
                label="singer"
                width="180"
              >
                <template #default="scope">
                  <el-space :size="0" spacer="/">
                    <el-button size="small" link>周杰伦</el-button>
                    <el-button size="small" link>张杰</el-button>
                  </el-space>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>全球榜</h3>
      <main class="global_ranking_grid">
        <SongListCover
          style="width: 160px"
          v-for="item in 37"
          :key="item"
        ></SongListCover>
      </main>
    </div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import SongListCover from '@/components/SongListCover.vue'
const tableData = [
  {
    name: '天嘿嘿',
    singer: '周杰伦',
  },
  {
    name: '水查',
    singer: '周杰伦',
  },
  {
    name: '天若有情',
    singer: '周杰伦',
  },
  {
    name: '就让这大雨全都落下',
    singer: '周杰伦',
  },
  {
    name: '字字句句',
    singer: '周杰伦',
  },
]
</script>

<style lang="less" scoped>
.img_radius {
  border-radius: 6px;
  overflow: hidden;
}
.global_ranking_grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &::after {
    content: '';
    width: 522px;
  }
}
</style>
