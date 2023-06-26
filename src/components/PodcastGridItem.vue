<template>
  <div class="grid_item_container">
    <SongListCover
      style="width: 160px"
      v-for="item in dataList"
      :key="item.id"
      :name="item.name"
      :playCount="item.playCount"
      :picUrl="item.picUrl"
      :subCount="item.subCount"
    >
      <el-tag effect="plain" type="info" size="small">{{
        item.secondCategory
      }}</el-tag>
    </SongListCover>
  </div>
</template>

<script lang="ts" setup>
import { getHotPodcastByCategory } from '@/api/podcast'
import type { DjRadio } from '@/models/podcastType'
const props = defineProps({
  cateId: {
    type: Number,
    required: true,
    default: 10002,
  },
  limit: {
    type: Number,
    required: false,
    default: 5,
  },
  offset: {
    type: Number,
    required: false,
    default: 0,
  },
})
const dataList = ref<DjRadio[]>([])
const getDataList = async (id: number, limit: number, offset: number) => {
  let res = await getHotPodcastByCategory(id, limit, offset)
  if (res.code !== 200) return
  dataList.value = res.djRadios.slice(0, 5)
}
onMounted(() => {
  getDataList(props.cateId, props.limit, props.offset)
})
</script>

<style lang="less" scoped>
.grid_item_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
