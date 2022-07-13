<template>
  <!-- // 公共组件 -->
  <div>
    <van-card
      v-for="(item, index) in list"
      :key="index"
      :desc="item.desc"
      :title="item.title"
      :price="item.price + '元/月'"
      :thumb="`http://liufusong.top:8080${item.houseImg}`"
    >
      <template #tags>
        <van-tag plain type="danger">{{ item.tags[0] }}</van-tag>
        <!-- <van-tag plain type="danger">{{ item.title }}</van-tag> -->
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  name: 'common',
  // 1.4父向子传值的接收
  props: {
    list: {
      type: Array,
      required: true
    }
  },
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
