import axios, { type AxiosRequestConfig } from 'axios'
import { API_BASE_URL } from '@/constants/index.ts'

// 创建 axios 实例
const request = axios.create({
  baseURL: API_BASE_URL, // API 请求的默认前缀
  timeout: 10 * 1000, // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error) => {
  // if (error.response) {
  //   const data = error.response.data
  //   // 从 localstorage 获取 token
  //   const token = storage.get(ACCESS_TOKEN)
  //   if (error.response.status === 403) {
  //     notification.error({
  //       message: 'Forbidden',
  //       description: data.message,
  //     })
  //   }
  //   if (
  //     error.response.status === 401 &&
  //     !(data.result && data.result.isLogin)
  //   ) {
  //     notification.error({
  //       message: 'Unauthorized',
  //       description: 'Authorization verification failed',
  //     })
  //     if (token) {
  //       store.dispatch('Logout').then(() => {
  //         setTimeout(() => {
  //           window.location.reload()
  //         }, 1500)
  //       })
  //     }
  //   }
  // }
  return Promise.reject(error)
}
// 请求拦截器
request.interceptors.request.use((config: AxiosRequestConfig | any) => {
  //const token = storage.get(ACCESS_TOKEN)
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  // if (token) {
  //   config.headers[ACCESS_TOKEN] = token
  // }
  config.params = {
    ...config.params,
    //t: Date.now(),
  }
  return config
}, errorHandler)

// 响应拦截器
request.interceptors.response.use((response) => {
  return response.data
}, errorHandler)

export default request
