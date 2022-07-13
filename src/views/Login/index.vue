<template>
  <div>
    <!-- 14 NavBar 导航栏 -->
    <!-- <van-nav-bar title="登录" left-arrow /> -->
    <!-- 15 用插槽修改图标 把单标签改为双标签  slot插槽-->
    <van-nav-bar title="账号登录" left-arrow> </van-nav-bar>
    <van-form @submit="onSubmit(user)" ref="form">
      <van-field
        name="用户名"
        v-model="user.username"
        placeholder="请输入用户名"
        :rules="[
          { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '不符合用户名的格式' },
        ]"
      />
      <van-field
        type="password"
        name="密码"
        v-model.trim="user.password"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请输入密码' },
          { pattern: /^\d{6}$/, message: '密码长度必须是6位' },
        ]"
      />
      <div style="margin: 16px">
        <van-button block native-type="submit"
          ><span class="login_btn">登 录</span></van-button
        >
      </div>
    </van-form>
    <div class="flexbox">
      <a href="">还没有账号，去注册~</a>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      user: {
        username: '', // 用户名
        password: '' // 密码}
      }
    }
  },
  methods: {
    // 3 调用封装后的ajax
    async onSubmit (values) {
      if (values.username === '' && values.password === '') return
      this.$toast.fail('用户名密码不能为空')

      try {
        const res = await login(values)
        console.log(res)
        // 调用Vuex里的方法 将用户的token 保存到states里
        this.$store.commit('setUser', res.data.body.token)
        if (res.data.body.token) {
          //  轻提示
          this.$toast.success('登录成功')
          this.$router.replace('/home')
        }
      } catch (err) {
        this.$toast.fail('登录失败')
      }
      // console.log(res)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-nav-bar__content {
  height: 45px;
}
.van-field {
  padding: 40px;
}
.van-field__control {
  height: 100px;
  padding: 2px 0;
  font-size: 17px;
}
.van-button {
  line-height: 50px;
  background-color: #21b97a;
  color: #fff;
  //  text-align: center;
  .login_btn {
    font-size: 36px !important;
  }
}

.flexbox {
  text-align: center;
  a {
    color: #666;
  }
}
</style>
