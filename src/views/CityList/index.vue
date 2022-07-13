<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow>
      <template #left>
        <!-- 点击跳转到上一页 @click="$router.back()"-->
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </template>
    </van-nav-bar>
    <div>
      <van-index-bar :index-list="code" highlight-color="red">
        <div v-for="(item, name, index) in theList" :key="index">
          <van-index-anchor :index="index"
            >{{
              name === "#" ? "当前城市" : name === "Hot" ? "热门城市" : name
            }}
          </van-index-anchor>
          <van-cell
            :title="item1.label"
            v-for="(item1, ind) in item"
            :key="ind"
          />
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { getCityList } from '@/api/home'
export default {
  created () {
    this.getCityList()
  },
  data () {
    return {
      theList: '',
      cityList: [],
      list: {},
      code: [
        '#',
        '热',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'W',
        'X',
        'Y',
        'Z'
      ]
    }
  },
  methods: {
    async getCityList () {
      try {
        const res = await getCityList(1)
        this.cityList = res.data.body
        this.code.forEach(item => {
          this.list[item] = []
          this.cityList.forEach(el => {
            if (item === el.short.slice(0, 1).toUpperCase()) {
              this.list[item].push(el)
              // $set(obj1,obj2,obj3)
              // $focusupdata() //强制更新
            }
          })
        })
        console.log(this.list)
        this.theList = this.list
        console.log(this.theList)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
// slice(第几个开始，一个截取几个)

</script>

<style scoped lang='less'>
</style>
