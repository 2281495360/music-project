<template>
  <div>
    <div>
      <el-input
        v-model="comment"
        :autosize="{ minRows: 4, maxRows: 6 }"
        type="textarea"
        placeholder="请输入友善的评论..."
      />
      <el-button style="margin-top: 10px" round>评论</el-button>
    </div>
    <div style="margin-top: 10px">
      <h4>精彩评论</h4>
      <div class="ui minimal comments" style="max-width: 100%">
        <template v-for="item in 4" :key="item">
          <div class="comment">
            <a class="avatar">
              <img
                src="https://semantic-ui.com/images/avatar/small/stevie.jpg"
              />
            </a>
            <div class="content">
              <a class="author" style="font-size: 12px">汤姆·卢基奇</a>&nbsp;
              <div class="metadata">
                <div>2 天前</div>
                &nbsp;
                <div>
                  <i class="thumbs up outline icon"></i>
                  666
                </div>
              </div>
              <div class="text">好听，nice！</div>
              <div class="actions">
                <a class="reply">回复</a>
              </div>
            </div>
          </div>
          <div class="ui divider"></div>
        </template>
      </div>
    </div>
    <div style="margin-top: 50px">
      <h4>最新评论(3754)</h4>
      <div class="ui minimal comments" style="max-width: 100%">
        <template v-for="item in 4" :key="item">
          <div class="comment">
            <a class="avatar">
              <img
                src="https://semantic-ui.com/images/avatar/small/stevie.jpg"
              />
            </a>
            <div class="content">
              <a class="author" style="font-size: 12px">汤姆·卢基奇</a>&nbsp;
              <div class="metadata">
                <div>2 天前</div>
                &nbsp;
                <div>
                  <i class="thumbs up outline icon"></i>
                  666
                </div>
              </div>
              <div class="text">好听，nice！</div>
              <div class="actions">
                <a class="reply">回复</a>
              </div>
            </div>
          </div>
          <div class="ui divider"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const comment = ref('')
</script>

<style lang="less" scoped></style>
