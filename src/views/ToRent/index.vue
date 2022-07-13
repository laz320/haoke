<template>
  <div>
    <!-- title -->
    <van-nav-bar title="发布房源">
      <template #left>
        <van-icon name="arrow-left" @click="$router.go(-1)" color="white" />
      </template>
    </van-nav-bar>
    <!-- content -->
    <!-- 房源信息 -->
    <van-cell-group inset>
      <van-cell title="房源信息" />
    </van-cell-group>
    <!-- 小区名字 -->
    <van-button block @click="$router.push('/HouseSearch')">
      <template #default>
        <div class="left">
          <p>小区名称</p>
        </div>
        <div class="right">
          <p>请输入小区名称</p>
          <van-icon name="arrow" />
        </div>
      </template>
    </van-button>
    <!-- 租金 -->
    <van-cell-group>
      <van-field v-model="price" label="租金" placeholder="请输入租金/月">
        <template #label>
          <p>租&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金</p>
        </template>
        <template #extra>
          <p>￥/月</p>
        </template>
      </van-field>
    </van-cell-group>
    <!-- 建筑面积 -->
    <van-cell-group>
      <van-field v-model="area" label="租金" placeholder="请输入建筑面积">
        <template #label>
          <p>建筑面积</p>
        </template>
        <template #extra>
          <p>m²</p>
        </template>
      </van-field>
    </van-cell-group>
    <!-- 户型 -->
    <div>
      <van-field
        input-align="right"
        readonly
        clickable
        name="type"
        :value="value[index]"
        :label="name"
        placeholder="请输入"
        @click="checked(item, index)"
        v-for="(item, name, index) in content"
        :key="index"
      >
      </van-field>
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        >
        </van-picker>
      </van-popup>
    </div>
    <!-- 所在楼层 -->
    <!-- <van-field
      input-align="right"
      readonly
      clickable
      name="float"
      value="请选择>"
      label="所在楼层"
      @click="showPicker = true"
    >
    </van-field>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns1"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      >
      </van-picker>
    </van-popup> -->
    <!-- 朝向 -->
    <!-- <van-field
      input-align="right"
      readonly
      clickable
      name="facing"
      value="请选择>"
      label="朝向"
      @click="showPicker = true"
    >
    </van-field>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      >
      </van-picker>
    </van-popup> -->
    <!-- 房屋标题的title -->
    <van-cell-group>
      <van-cell title="房屋标题" />
    </van-cell-group>
    <!-- 房屋标题的content -->
    <van-cell-group>
      <van-field
        v-model="value1"
        placeholder="请输入标题(例如：整租 小区名 2室 5000元)"
      />
    </van-cell-group>
    <!-- 房屋图像 -->
    <van-cell-group>
      <van-cell title="房屋图像" />
    </van-cell-group>
    <!-- 房屋图像内容 -->
    <van-uploader :after-read="afterRead" style="margin: 10px 10px" />
    <!-- 房屋配置 -->
    <!-- <van-cell-group> -->
    <!-- <van-cell title="房屋图像" /> -->
    <!-- </van-cell-group> -->
    <!-- 房屋配置内容 -->
    <!-- <van-grid :column-num="5">
      <van-grid-item icon="location-o" text="衣柜" />
      <van-grid-item icon="like-o" text="洗衣机" />
      <van-grid-item icon="star-o" text="空调" />
      <van-grid-item icon="phone-o" text="天然气" />
      <van-grid-item icon="setting-o" text="冰箱" />
      <van-grid-item icon="fire-o" text="暖气" />
      <van-grid-item icon="coupon-o" text="电视" />
      <van-grid-item icon="cart-o" text="热水器" />
      <van-grid-item icon="shopping-cart-o" text="宽带" />
      <van-grid-item icon="friends-o" text="沙发" />
    </van-grid> -->
    <!-- 房屋描述 -->
    <!-- <van-cell-group>
      <van-cell title="房屋描述" />
    </van-cell-group> -->
    <!-- 房屋描述内容 -->
    <!-- <van-field
      v-model="message"
      rows="2"
      autosize
      label="留言"
      type="textarea"
      maxlength="50"
      placeholder="请输入留言"
      show-word-limit
    /> -->
  </div>
</template>

<script>
import { getPublishList } from '@/api/house'
export default {
  created () {
    this.getPublishList()
  },
  data () {
    return {
      value1: '',
      index: '',
      value: ['', '', ''],
      price: '', // 租金
      area: '', // 面积
      showPicker: false,
      columns: [],
      List: {},
      content: {},
      roomOptions: {}
    }
  },
  methods: {
    onConfirm (value) {
      console.log(value)
      this.value[this.index] = value
      this.showPicker = false
    },
    // 发布房源
    async getPublishList () {
      try {
        const res = await getPublishList()
        this.List = res.data.body
        console.log(this.List)
        this.content = { 户型: this.List.roomType, 所在楼层: this.List.floor, 朝向: this.List.oriented }
        console.log(this.content)
        this.roomOptions = { supporting: this.List.supporting }
      } catch (err) {
        console.log(err)
      }
    },
    checked (item, index) {
      this.index = index
      this.showPicker = true
      this.columns = []
      item.forEach(el => {
        this.columns.push(el.label)
      })
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
/deep/.van-cell-group--inset {
  margin: unset;

  .van-cell {
    color: #21b97a;
  }
}

/deep/.van-button__content {
  justify-content: unset;

  .van-button__text {
    display: block;
    width: 100%;

    .left {
      float: left;
    }

    .right {
      float: right;

      p {
        float: left;
      }

      .van-icon {
        float: right;
      }
    }
  }
}

/deep/.van-field__label {
  margin-right: unset;
}

.right {
  text-align: right;
}
</style>
