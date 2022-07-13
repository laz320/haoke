<template>
  <div>
    <van-search v-model="value" show-action placeholder="请输入搜索关键词">
      <template #label>
        <p @click="$router.push('/citylist')">地址</p>
      </template>
      <template #action>
        <div><van-icon name="location-o"  @click="$router.push('/map')"/></div>
      </template>
    </van-search>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in images" :key="item.id">
        <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt=""
      /></van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <van-grid clickable :column-num="4" :border="flag">
      <van-grid-item icon="home-o" text="路由跳转" to="/find">
        <img src="@/assets/03.png" alt="" />
        <p>整租</p></van-grid-item
      >
      <van-grid-item icon="home-o" text="路由跳转" to="/find">
        <img src="@/assets/04.png" alt="" />
        <p>合租</p></van-grid-item
      >
      <van-grid-item icon="home-o" text="路由跳转" to="/map">
        <img src="@/assets/05.png" alt="" />
        <p>地图找房</p></van-grid-item
      >
      <van-grid-item icon="home-o" text="路由跳转" to="/torent">
        <img src="@/assets/06.png" alt="" />
        <p>去出租</p></van-grid-item
      >
    </van-grid>
    <!-- <div class="flexbox">
      <ul>
        <li>
          <img src="@/assets/03.png" alt="" />
          <p>整租</p>
        </li>
        <li>
          <img src="@/assets/04.png" alt="" />
          <p>合租</p>
        </li>
        <li>
          <img src="@/assets/05.png" alt="" />
          <p>地图找房</p>
        </li>
        <li>
          <img src="@/assets/06.png" alt="" />
          <p>去合租</p>
        </li>
      </ul>
    </div> -->
    <div class="grouplist">
      <div class="more">
        <van-cell value="更多">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">租房小组</span>
          </template>
        </van-cell>
      </div>
      <!-- 宫格 -->
      <van-grid
        direction="horizontal"
        title="item.title"
        column-num="2"
        gutter="10px"
      >
        <van-grid-item v-for="item in group" :key="item.id">
          <div class="pic">
            <img :src="`http://liufusong.top:8080/${item.imgSrc}`" alt="" />
            <div>
              <p>{{ item.title }}</p>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </van-grid-item>
        <!-- <van-grid-item icon="photo-o" text="文字">
          <div class="pic" >
            <img src="@/assets/03.png" alt="" />
            <div>
              <p>123123123</p>
              <p>123123123</p>
            </div>
          </div> </van-grid-item
        > -->

        <!-- <van-grid-item icon="photo-o" text="文字">
          <div class="pic">
            <img src="@/assets/03.png" alt="" />
            <div>
              <p>123123123</p>
              <p>123123123</p>
            </div>
          </div> </van-grid-item
        ><van-grid-item icon="photo-o" text="文字">
          <div class="pic">
            <img src="@/assets/03.png" alt="" />
            <div>
              <p>123123123</p>
              <p>123123123</p>
            </div>
          </div>
        </van-grid-item> -->
      </van-grid>
    </div>
  </div>
</template>

<script>
// 引入
import { getImages, getGroup } from '@/api/home'
export default {
  // 发送ajax请求
  async created () {
    try {
      const res = await getImages()
      this.images = res.data.body
      console.log(res)
    } catch (err) {
      console.log(err)
    }
    try {
      const res = await getGroup()
      console.log(res)
      this.group = res.data.body
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      images: [
        // 'http://liufusong.top:8080/img/swiper/1.png',
        // 'http://liufusong.top:8080/img/swiper/2.png',
        // 'http://liufusong.top:8080/img/swiper/3.png'

      ],
      value: '',
      group: [],
      flag: false
    }
  },
  methods: {
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-swipe-item img {
  width: 100%;
  height: auto;
  vertical-align: top;
  margin-bottom: 20px;
}
.van-search[data-v-1d9b105c] {
  position: fixed;
  z-index: 2;
  width: 95%;
  left: 20px;
}

// .van-icon-location-o {
//   color: #fff;
// }
// .flexbox ul {
//   display: flex;
//   padding-top: 10px;
//   p {
//     text-align: center;
//   }
// }
.more {
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0);
  .custom-title {
    font-weight: bold;
  }
}
/deep/.van-grid-item {
  justify-content: unset;
  img {
    width: 100px;
    height: 100px;
  }
  .pic {
    display: flex;
    p {
      flex: 1;
    }
  }
}
.grouplist {
  background: #f6f5f6;
  height: 500px;
  margin-top: 30px;
}
/deep/.van-grid-item__content {
  // background: red;
  height: 150px;
}
</style>
