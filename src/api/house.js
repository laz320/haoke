import request from '@/utils/request'


// 通过名称搜索小区
export const getSearchNews = (name, id) => {
  return request({
    url: `/area/community?name=${name}&id=${id}`
  })
}

// 发布房源
export const getPublishList = (token) => {
  return request({
    url: '/houses/params',
    headers: {
      authorization: token
    }
  })
}
// export const getHouseImg = () => {
//   return request({
//     method: 'POST',
//     url: 'houses/image',
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   })
// }
