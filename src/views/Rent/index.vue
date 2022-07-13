<template>
  <div>
    <van-sticky>
      <van-nav-bar title="房屋管理" left-arrow>
        <template #left>
          <!-- 点击跳转到上一页 @click="$router.back()"-->
          <van-icon name="arrow-left" @click="$router.back()" />
        </template>
      </van-nav-bar>
    </van-sticky>

    <!-- 父向子传值 -->
    <Common :list="houseRent"></Common>
  </div>
</template>

<script>
import Common from '@/components/Common.vue'
import { getHouseRent } from '@/api/user'
export default {
  // 发送ajax请求
  async created () {
    try {
      // 给ajax方法 传入用户的token 传到后台返回数据
      const res = await getHouseRent(this.$store.state.user)
      this.houseRent = res.data.body
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      houseRent: []
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {
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
