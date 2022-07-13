import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
// 1 导入所有组件
import Vant from 'vant'
import 'vant/lib/index.less'
import '@/styles/reset.less'
import common from '@/components/Common.vue'
import axios from 'axios'
Vue.use(Vant)
axios.defaults.baseURL = 'http://liufusong.top:8080/'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.component(common.name, common)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
