<template>
  <div>
    <van-sticky>
     <van-nav-bar title="收藏列表" left-arrow >
      <template #left>
        <!-- 点击跳转到上一页 @click="$router.back()"-->
      <van-icon name="arrow-left"  @click="$router.back()"/>
      </template>
     </van-nav-bar>
     </van-sticky>
     <!-- 1.3 父向子传值 -->
    <Common :list="shopList" ></Common>
  </div>
</template>

<script>
// 1.1引入
import Common from '@/components/Common.vue'
// 1我的收藏部分
import { getShopList } from '@/api/user'
export default {
  // 发送ajax请求
  async created () {
    try {
      const res = await getShopList(this.$store.state.user)
      console.log(res)
      this.shopList = res.data.body
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      shopList: []
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {
    // 1.2注册
    Common
  }
}
</script>

<style scoped lang='less'>
.total {
  display: flex;
  height: 220px;
  position: relative;
  box-sizing: border-box;
  padding-top: 18px;
  border-bottom: 1px solid #e5e5e5;
}
/deep/.van-card__content {
  .van-card__title {
    font-size: 30px;
    color: #394043;
  }
  .van-card__desc {
    font-size: 24px;
    color: #afb2b3;
  }
  .van-tag--danger.van-tag--plain {
    color: #39becd;
    background: #e1f5f8;
  }
  .van-card__price {
    font-size: 24px;
    color: #fa5741;
  }
}

</style>
