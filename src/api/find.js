import request from '@/utils/request'
// 找房页面的接口封装
export const getFind = () => {
  return request({
    url: '/houses?cityId=AREA|a6649a11-be98-b150'
  })
}

// 筛选部分的接口封装
// export const getLayoout = (token) => {
//   return request({
//     url: '/houses/params',
//     headers: {
//       authorization: token
//     }
//   })
// }
