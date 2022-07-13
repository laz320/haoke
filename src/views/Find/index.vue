<template>
  <div>
    <van-sticky>
      <van-nav-bar left-arrow>
        <template #left>
          <!-- 点击跳转到上一页 @click="$router.back()"-->
          <van-icon name="arrow-left" @click="$router.back()" />
        </template>
        <template #title>
          <van-search
            v-model="value"
            label="地址"
            placeholder="请输入搜索关键词"
          >
          </van-search>
        </template>
      </van-nav-bar>
      <van-dropdown-menu>
        <van-dropdown-item>
          <template #title> 区域 </template>
          <template>
            <van-picker :columns="columns" />
            <van-button plain type="primary">取消</van-button>
            <van-button type="primary">确定</van-button>
          </template>
        </van-dropdown-item>
        <van-dropdown-item
          ><template #title> 方式 </template>
          <template>
            <van-picker :columns="columns" />
            <van-button plain type="primary">取消</van-button>
            <van-button type="primary">确定</van-button>
          </template>
        </van-dropdown-item>
        <van-dropdown-item>
          <template #title> 租金 </template>
          <template>
            <van-picker :columns="columns" />
            <van-button plain type="primary">取消</van-button>
            <van-button type="primary">确定</van-button>
          </template>
        </van-dropdown-item>

        <van-dropdown-item>
          <template #title> <span @click="show = true">筛选</span> </template>
        </van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>
    <Common :list="findList"></Common>
    <van-popup
      v-model="show"
      position="right"
      :style="{ width: '275px', height: '100%' }"
    >
      <div class="channel_container">
        <div class="title">
          <h3>户型</h3>
        </div>
        <van-row>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">123</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">183</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">183</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">183</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">+183</div>
          </van-col>

          <!-- <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col> -->
        </van-row>
      </div>
      <div class="channel_container">
        <div class="title">
          <h3>朝向</h3>
        </div>
        <van-row>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">123</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">183</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">183</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">183</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">+183</div>
          </van-col>

          <!-- <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col> -->
        </van-row>
      </div>
      <div class="channel_container">
        <div class="title">
          <h3>楼层</h3>
        </div>
        <van-row>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">123</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">183</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">183</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">183</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">+183</div>
          </van-col>

          <!-- <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col> -->
        </van-row>
      </div>
      <div class="channel_container">
        <div class="title">
          <h3>房屋亮点</h3>
        </div>
        <van-row>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">123</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">183</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">183</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">183</div>
          </van-col>
          <van-col span="10">
            <!-- 4444 van-ellipsis内置样式-->
            <div class="inner van-ellipsis">+183</div>
          </van-col>

          <!-- <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col>
        <van-col span="6"><div class="inner">123</div></van-col> -->
        </van-row>
      </div>
      <template>
        <van-button plain type="primary">取消</van-button>
        <van-button type="primary">确定</van-button>
      </template>
    </van-popup>
  </div>
</template>

<script>
import Common from '@/components/Common.vue'
import { getFind } from '@/api/find'
export default {
  async created () {
    try {
      const res = await getFind()
      this.findList = res.data.body.list
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      value: '',
      show: false,
      findList: [],
      columns: [
        {
          text: '区域',
          children: [
            {
              text: '杭州',
              children: { text: '西湖区' }
            },
            {
              text: '温州',
              children: { text: '鹿城区' }
            }
          ]
        },
        {
          text: '地铁',
          children: [
            {
              text: '福州',
              children: { text: '鼓楼区' }
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ]

    }
  },
  methods: {
    // async getLayoout () {
    //   try {
    //     const res = await getLayoout()
    //     console.log(res)
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { Common }
}
</script>

<style scoped lang='less'>
.van-search {
  width: 500px;
  margin-right: 100px;
}
.van-button {
  width: 375px;
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
.channel_container {
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    padding-right: 16px;

    // margin-bottom: 16px;
    h3 {
      // font-size: 32px;
      font-weight: 400;
      color: #333333;
      // padding-top: 30px;
      margin: 20px 0;
      font-size: 28px;
    }
  }
  .inner {
    width: 150px;
    height: 70px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 28px;
    font-weight: 400;
    color: #888;
    text-align: center;
    line-height: 86px;
    margin-left: 14px;
    margin-top: 22px;
    position: relative;
  }
}
.van-row {
  padding-left: 100px;
}
// .van-dropdown-menu{
//   margin-top: 100px;
// }
</style>
