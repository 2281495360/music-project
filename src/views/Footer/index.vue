<template>
  <div class="container">
    <FooterLeft></FooterLeft>
    <FooterCenter></FooterCenter>
    <FooterRight></FooterRight>
  </div>
</template>

<script lang="ts" setup>
import FooterLeft from './components/FooterLeft.vue'
import FooterCenter from './components/FooterCenter.vue'
import FooterRight from './components/FooterRight.vue'
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
</style>
