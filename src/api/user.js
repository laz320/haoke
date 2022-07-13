import request from '@/utils/request'
// 2封装
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}

export const userApi = (token) => {
  return request({
    url: '/user',
    headers: {
      authorization: token
    }
  })
}

// 我的收藏的接口封装(文档中有token)
export const getShopList = (token) => {
  return request({
    url: '/user/favorites',
    headers: {
      authorization: token
    }
  })
}

// 房屋出租的接口封装(文档中有token)
export const getHouseRent = (token) => {
  return request({
    url: '/user/houses',
    headers: {
      authorization: token
    }
  })
}
