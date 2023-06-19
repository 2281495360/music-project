<template>
  <el-scrollbar>
    <div>
      <h3>官方榜</h3>
      <div class="ui relaxed items">
        <div class="item" v-for="item in headerRankList" :key="item.id">
          <div class="image img_radius">
            <img :src="item.picUrl" />
          </div>
          <div class="middle aligned content">
            <el-table
              :data="item.tableData"
              stripe
              :show-header="false"
              style="width: 100%; border-top: 1px solid #ebeef5"
              size="small"
            >
              <el-table-column type="index" align="center" width="50" />
              <el-table-column prop="name" label="name" />
              <el-table-column align="right" label="singer" width="180">
                <template #default="scope">
                  <el-space :size="0" spacer="/">
                    <el-button
                      v-for="artist in scope.row.artists"
                      :key="artist.id"
                      size="small"
                      link
                      >{{ artist.name }}</el-button
                    >
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
          v-for="item in rankListInfoArr.slice(4)"
          :key="item.id"
          :picUrl="item.coverImgUrl"
          :playCount="item.playCount"
          :name="item.name"
        ></SongListCover>
        <SongListCover
          style="width: 160px; visibility: hidden"
          v-for="item in 5 - (rankListInfoArr.slice(4).length % 5)"
          :key="item"
          :picUrl="'null'"
          :playCount="0"
          :name="'null'"
        ></SongListCover>
      </main>
    </div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import SongListCover from '@/components/SongListCover.vue'
import { getToplist, getPlayListDetail } from '@/api/playList'
import type { RankList } from '@/models/rankList'
import type { Ar } from '@/models/play_list'
const rankListInfoArr = ref<RankList[]>([])
interface TableData {
  id: number
  name: string
  artists: Ar[]
}
interface HeaderRankListType {
  id: number
  picUrl: string
  tableData: TableData[]
}
const headerRankList = ref<HeaderRankListType[]>([])
const getHeaderRankList = (rankListInfoArr: RankList[]) => {
  let idList = rankListInfoArr.slice(0, 4).map((item: RankList) => item.id)
  idList.forEach(async (id: number) => {
    let res = await getPlayListDetail(id)
    let tableData = res.playlist.tracks.slice(0, 5).map((item) => {
      return {
        id: item.id,
        name: item.name,
        artists: item.ar,
      }
    })
    headerRankList.value.push({
      id,
      picUrl: res.playlist.coverImgUrl,
      tableData,
    })
  })
}
const getRankListInfo = async () => {
  let res = await getToplist()
  if (res.code !== 200) return
  getHeaderRankList(res.list)
  setTimeout(() => {
    rankListInfoArr.value = res.list
  }, 300)
}
onMounted(() => {
  getRankListInfo()
})
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
