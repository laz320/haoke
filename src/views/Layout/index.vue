<template>
  <div>
    <!-- 5 标签栏的路由模式 -->
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item to="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="find" icon="search">找房</van-tabbar-item>
      <van-tabbar-item to="news" icon="setting-o">咨询</van-tabbar-item>
      <van-tabbar-item to="my" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      active: 0
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
