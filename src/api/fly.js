import config from '../config'
import Fly from "flyio/dist/npm/wx";
const fly = new Fly;

//配置请求基地址
fly.config.baseURL = config.api.baseUrl

// //添加请求拦截器
fly.interceptors.request.use((config, promise) => {
  //给所有请求添加自定义header
  config.headers["X-Tag"] = "flyio";
  // if (config.url.indexOf('/api') !== -1 && wx.getStorageSync('token')) {
  //   config.headers['Authorization'] = 'Bearer ' + wx.getStorageSync('token')
  // }
  wx.showLoading({
    title: '加载中'
  })
  //可以通过promise.reject／resolve直接中止请求
  //promise.resolve("fake data")
  return config;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response, promise) => {
    //只将请求结果的data字段返回
    wx.hideLoading()
    return response.data
  },
  (err, promise) => {
    wx.hideLoading()
    console.log(err)
    // if(err.status === 401) {
    //     console.log('401')
    //     wx.removeStorageSync('token')
    //     wx.navigateTo({
    //         url: '/pages/login/main'
    //     })
    // }
    if (err.status === 500 || err.status === 400) {
      wx.showToast({
        title: '小程序打盹了',
        icon: 'none'
      })
    }
    //发生网络错误后会走到这里
    //promise.resolve("ssss")
  }
)
export default fly