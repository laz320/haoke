<template>
  <div>
    <router-view></router-view>
    <!-- 头部 -->
    <div class="myTitle">
      <div class="user" v-if="isLoginShow">
        <div class="avatar">
          <img
            :src="`http://liufusong.top:8080${userobj.avatar}`"
            style="width: 60px"
          />
        </div>
        <p class="name">
          {{ userobj.nickname }}
        </p>
        <span class="quit" @click="loginout"> 退出</span>
        <div class="edit" style="margin-top: 15px; color: #999">
          编辑个人资料<van-icon name="arrow" />
        </div>
      </div>
      <div class="user" v-else>
        <div class="avatar">
          <img
            src="http://liufusong.top:8080/img/profile/avatar.png"
            style="width: 60px"
          />
        </div>
        <p class="name">游客</p>
        <span class="quit" @click="$router.push({ path: 'login' })"
          >去登录</span
        >
      </div>
    </div>
    <!-- 下面的6个 -->
    <div class="myOptions" style="padding-top: 0.775rem">
      <van-row>
        <van-col span="8">
          <!-- 三 绑定点击事件 跳转页面 路径拼接 -->
          <div @click="$router.push({ path: '/collect' })">
            <i> <van-icon name="star-o" size="20px" /></i>
            <p>我的收藏</p>
          </div></van-col
        >
        <van-col span="8">
          <div @click="$router.push({ path: '/rent' })">
            <i> <van-icon name="wap-home-o" size="20px" /></i>
            <p>我的出租</p>
          </div></van-col
        >
        <van-col span="8">
          <div>
            <i> <van-icon name="clock-o" size="20px" /></i>
            <p>看房记录</p>
          </div></van-col
        >
        <van-col span="8">
          <div>
            <i> <van-icon name="idcard" size="20px" /></i>
            <p>成为房主</p>
          </div></van-col
        >
        <van-col span="8">
          <div>
            <i> <van-icon name="user-o" size="20px" /></i>
            <p>个人资料</p>
          </div></van-col
        >
        <van-col span="8">
          <div>
            <i> <van-icon name="service-o" size="20px" /></i>
            <p>联系我们</p>
          </div></van-col
        >
      </van-row>
    </div>
    <img
      src="@/assets/join.png"
      style="width: 92%; display: block; margin: 0 auto"
    />
  </div>
</template>

<script>
import { userApi } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      isLoginShow: true,
      userobj: ''
    }
  },
  methods: {
    async getUserInfo () {
      try {
        const res = await userApi(this.$store.state.user)
        console.log(res)
        this.userobj = res.data.body
        console.log(this.userobj.avatar)
      } catch (err) {
        console.log(err)
      }
    },
    loginout () {
      this.$dialog.confirm({
        title: '确认退出登陆吗'
      })
        .then(() => {
          // on confirm
          this.isLoginShow = false
          this.$router.push({ path: 'my' })
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          // on cancel
        })
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {},
  mounted () {
    this.getUserInfo()
    if (this.$store.state.user === null) {
      this.isLoginShow = false
    } else {
      this.isLoginShow = true
    }
  }
}
</script>

<style scoped>
.myTitle {
  position: relative;
  height: 700px;
  background: url("http://liufusong.top:8080/img/profile/bg.png") no-repeat top;
  background-size: 100%;
}
.user {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 85%;
  height: 65%;
  margin: 25px auto 0;
  padding: 0 20px;
  font-size: 13px;
  text-align: center;
  background: #fff;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
}
.quit {
  padding: 2px 15px;
  font-size: 12px;
  color: #fff;
  background: #21b97a;
  border-radius: 30px;
}
.van-col {
  margin-bottom: 15px;
  font-size: 15px;
  color: #333;
  text-align: center;
}
</style>
