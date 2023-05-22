<template>
  <el-scrollbar>
    <div class="ui segment header_box">
      <div class="header_box_item" v-for="item in imgUrlList" :key="item.title">
        <div
          class="img_container"
          :style="{ backgroundImage: `url(${item.imgUrl})` }"
        ></div>
        <div>{{ item.title }}</div>
      </div>
    </div>
    <h3>猜你喜欢</h3>
    <div class="grid_item_container">
      <SongListCover
        style="width: 160px"
        v-for="item in 5"
        :key="item"
      ></SongListCover>
    </div>
    <h3>本周上新</h3>
    <div class="ui two column grid" style="margin-right: 0">
      <div class="column" v-for="item in 2" :key="item">
        <div class="ui items">
          <div class="item two_column_item" v-for="item in 3" :key="item">
            <div class="ui tiny image" style="width: 84px">
              <img
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
            </div>
            <div class="middle aligned content">
              <el-space direction="vertical" alignment="flex-start">
                <header>寂寞烟火</header>
                <el-tag type="info" effect="plain" size="small"
                  >歌曲翻唱</el-tag
                >
                <el-space>
                  <el-button link>2023抖音热歌BGM</el-button>
                  <span><i class="play circle outline icon"></i>666万</span>
                  <span><i class="clock outline icon"></i>00:13</span>
                </el-space>
              </el-space>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3>创作翻唱</h3>
    <div class="grid_item_container">
      <SongListCover
        style="width: 160px"
        v-for="item in 5"
        :key="item"
      ></SongListCover>
    </div>
    <h3>电音</h3>
    <div class="grid_item_container">
      <SongListCover
        style="width: 160px"
        v-for="item in 5"
        :key="item"
      ></SongListCover>
    </div>
    <h3>音乐推荐</h3>
    <div class="grid_item_container">
      <SongListCover
        style="width: 160px"
        v-for="item in 5"
        :key="item"
      ></SongListCover>
    </div>
    <h3>二次元</h3>
    <div class="grid_item_container">
      <SongListCover
        style="width: 160px"
        v-for="item in 5"
        :key="item"
      ></SongListCover>
    </div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
const imgUrlList = [
  {
    imgUrl:
      'https://p3.music.126.net/icULXvfqWJMFvcjTrXSLeA==/109951165406422565.jpg',
    title: '情感',
  },
  {
    imgUrl:
      'https://p4.music.126.net/fWonYYR8sORR2mEKZfYqjQ==/109951165406418703.jpg',
    title: '音乐播客',
  },
  {
    imgUrl:
      'https://p4.music.126.net/Tg1Ids_gRSqaZXyZ3zj0Sg==/109951166109395795.jpg',
    title: '有声书',
  },
  {
    imgUrl:
      'https://p4.music.126.net/LIkzDiW_ktaSbk_s6MgMkg==/109951165406441809.jpg',
    title: '脱口秀',
  },
  {
    imgUrl:
      'https://p3.music.126.net/GqeTI3A_g4FFzm_4MoNSsQ==/109951165406411412.jpg',
    title: '创作翻唱',
  },
  {
    imgUrl:
      'https://p3.music.126.net/3qyLawhgmTyHNabhuaKYTg==/109951165406422635.jpg',
    title: '电音',
  },
  {
    imgUrl:
      'https://p4.music.126.net/wOmtE80i2EMG2dR7DnTJUw==/109951166108735875.jpg',
    title: '知识',
  },
  {
    imgUrl:
      'https://p3.music.126.net/bOFLdKG966TolZNpA1VYtw==/109951166108595279.jpg',
    title: '二次元',
  },
  {
    imgUrl:
      'https://p4.music.126.net/hxNgvipzXFp570FgkiFGcQ==/109951166108605164.jpg',
    title: '明星',
  },
  {
    imgUrl:
      'https://p3.music.126.net/X3gH1OSeg5xQV5bqSv-cEg==/109951166108614572.jpg',
    title: '生活',
  },
  {
    imgUrl:
      'https://p3.music.126.net/krSruAC4wwq3TXJkcSHvUQ==/109951166108617045.jpg',
    title: '亲子',
  },
  {
    imgUrl:
      'https://p4.music.126.net/OS8NVOBjZoznnOc5YSBy3w==/109951166108651181.jpg',
    title: '新闻资讯',
  },
  {
    imgUrl:
      'https://p4.music.126.net/la9HvnMewT3lp72DL-NgKA==/109951166108675738.jpg',
    title: '广播剧',
  },
  {
    imgUrl:
      'https://p4.music.126.net/4pgJFKZYNU1tZxQdp6xa-A==/109951166111062508.jpg',
    title: '故事',
  },
  {
    imgUrl:
      'https://p3.music.126.net/HXCbeAs1YDXgOOwE9oY2ew==/109951166111050278.jpg',
    title: '人文历史',
  },
  {
    imgUrl:
      'https://p3.music.126.net/gFOkDDYZa8m93ccvIlmmvg==/109951166108686306.jpg',
    title: '娱乐',
  },
  {
    imgUrl:
      'https://p4.music.126.net/BwIOmsgRTVLL1vrVieJD9w==/109951166108695116.jpg',
    title: '相声曲艺',
  },
  {
    imgUrl:
      'https://p4.music.126.net/W1j-Lb5ozohzud342aPIpw==/109951166108699096.jpg',
    title: '其它',
  },
]
</script>

<style lang="less" scoped>
.two_column_item:hover {
  background-color: #ebebeb;
}
.header_box {
  display: flex;
  flex-wrap: wrap;
  column-gap: 39px;
  row-gap: 20px;
  background-color: #fff5f5;
  .header_box_item {
    display: flex;
    width: 60px;
    height: 60px;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #ebedf0;
    }
    .img_container {
      width: 48px;
      height: 48px;
      background-position: 48px 48px;
    }
  }
}
.grid_item_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
