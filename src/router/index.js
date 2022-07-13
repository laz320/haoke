import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
// 一 导入
import Collect from '@/views/Collect'
import Rent from '@/views/Rent'
import Map from '@/views/Map'
import ToRent from '@/views/ToRent'
import HouseSearch from '@/views/HouseSearch'
import CityList from '@/views/CityList'

Vue.use(VueRouter)

// 10 懒加载写法
const Home = () => import('@/views/Home')
const Find = () => import('@/views/Find')
const News = () => import('@/views/News')
const My = () => import('@/views/My')

// 12
const Login = () => import('@/views/Login')

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home', // 重定向 默认首次打开是首页
    // 11 配置路由
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'find',
        component: Find
      }, {
        path: 'news',
        component: News
      }, {
        path: 'my',
        component: My
      }

    ]
  },
  // 13
  {
    path: '/login',
    component: Login
  },
  // 二 配置一级路由
  {
    path: '/collect',
    component: Collect
  },
  {
    path: '/rent',
    component: Rent
  },
  {
    path: '/map',
    component: Map
  },
  {
    path: '/torent',
    component: ToRent
  },
  {
    path: '/housesearch',
    component: HouseSearch
  },
  {
    path: '/citylist',
    component: CityList
  }
]

const router = new VueRouter({
  routes
})

export default router
