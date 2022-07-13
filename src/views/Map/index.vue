<template>
  <div>
    <van-nav-bar title="地图找房" left-arrow>
      <template #left>
        <!-- 点击跳转到上一页 @click="$router.back()"-->
        <van-icon name="arrow-left" @click="$router.back()" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
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
