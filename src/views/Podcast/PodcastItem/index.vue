<template>
  <el-scrollbar>
    <header>
      <h3>播客详情</h3>
      <el-radio-group v-model="radio">
        <el-radio-button label="热门" />
        <el-radio-button label="歌曲翻唱" />
        <el-radio-button label="原创demo" />
        <el-radio-button label="乐器演奏" />
      </el-radio-group>
    </header>
    <main style="margin-top: 20px">
      <div class="ui two column grid" style="margin-right: 0">
        <div class="column" v-for="item in 2" :key="item">
          <div class="ui items">
            <div class="item item_hover" v-for="item in 5" :key="item">
              <img
                class="ui small rounded bordered image"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
              <div class="middle aligned content">
                <a class="header">标题</a>
                <div class="meta">
                  <span>Description</span>
                </div>
                <div class="description">
                  <p></p>
                </div>
                <div class="extra">Additional Details</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </el-scrollbar>
</template>

<script lang="ts" setup>
const radio = ref('热门')
</script>

<style lang="less" scoped>
.item_hover:hover {
  background-color: #ebebeb;
  cursor: pointer;
}
</style>
