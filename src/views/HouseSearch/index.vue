<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
</template>

<script>
import { getSearchNews } from '@/api/house'
export default {
  async created () {
    try {
      const res = await getSearchNews()
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      value: '',
      newsList: []
    }
  },
  methods: {
    onSearch (val) {

    },
    onCancel () {
      // 取消
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
