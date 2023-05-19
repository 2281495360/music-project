<template>
  <div class="mv_rank_container">
    <header>
      <el-text type="info">最近更新：今天</el-text>
      <el-radio-group v-model="radio" size="small">
        <el-radio-button label="内地" />
        <el-radio-button label="港台" />
        <el-radio-button label="欧美" />
        <el-radio-button label="日本" />
        <el-radio-button label="韩国" />
      </el-radio-group>
    </header>
    <main>
      <div class="ui two column grid">
        <div class="column">
          <div class="ui segment" v-for="item in 10" :key="item">
            <div class="ui items" style="margin: 0">
              <div class="item">
                <a class="image">
                  <img
                    style="width: 170px; height: 94px; border-radius: 4px"
                    src="https://p1.music.126.net/uFWcdYyjcqvM5JFZ5nsPGw==/1365593453032084.jpg?param=140y140"
                  />
                </a>
                <div class="content">
                  <div class="description">
                    <a>愿与愁</a>
                  </div>
                  <div class="meta">
                    <a>林俊杰</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="ui red top right attached mini label">
              <i class="long arrow alternate up icon"></i>
              01
            </div> -->
            <!-- <div class="ui teal top right attached mini label">
              <i class="long arrow alternate down icon"></i>
              01
            </div> -->
            <div class="ui top right attached mini label">{{ item }}</div>
          </div>
        </div>
        <div class="column">
          <div class="ui segment" v-for="item in 10" :key="item">
            <div class="ui items" style="margin: 0">
              <div class="item">
                <a class="image">
                  <img
                    style="width: 170px; height: 94px; border-radius: 4px"
                    src="https://p1.music.126.net/uFWcdYyjcqvM5JFZ5nsPGw==/1365593453032084.jpg?param=140y140"
                  />
                </a>
                <div class="content">
                  <div class="description">
                    <a>愿与愁</a>
                  </div>
                  <div class="meta">
                    <a>林俊杰</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="ui top right attached mini label">{{ item + 10 }}</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
const radio = ref('内地')
</script>

<style lang="less" scoped>
.mv_rank_container {
  header {
    display: flex;
    height: 25px;
    align-items: center;
    justify-content: space-between;
  }
  main {
    overflow: hidden;
    margin-top: 10px;
  }
}
</style>
