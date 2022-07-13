import request from '@/utils/request'
// 轮播图的接口封装
export const getImages = () => {
  return request({
    url: '/home/swiper'

  })
}

// 租房小组的接口封装
export const getGroup = () => {
  return request({
    url: '/home/groups'
  })
}

// 城市列表
export const getCityList = (id) => {
  return request({
    url: `/area/city?level=${id}`
  })
}
