<template>
  <div class="ui segment">
    <div class="ui two column grid">
      <div class="column" v-for="item in 2" :key="item">
        <div class="ui items">
          <div class="item" v-for="item in 10" :key="item">
            <a class="ui circular tiny image">
              <img
                src="https://semantic-ui.com/images/avatar/large/jenny.jpg"
              />
            </a>
            <div class="middle aligned content">
              <div class="description">
                <p><a>面对疾风吧</a></p>
                <p>本人丰富，无法简介</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ui vertical divider">and</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped></style>
