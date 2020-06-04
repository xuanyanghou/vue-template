import axios from 'axios'
import { encrypt } from './crypto'

const apiConfig = {
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: Number(process.env.VUE_APP_TIMEOUT),
  withCredentials: Boolean(process.env.VUE_APP_WITHCREDENTIALS)
}
// 无任何处理
export const httpAgent = axios

// 加密请求
export const httpsAgent = axios.create(apiConfig)

// 无包装request参数请求
export const request = axios.create(apiConfig)

export default {
  install (Vue, options) {
    if (this.installed) return

    console.log('----axios--options', options)

    this.installed = true

    request.interceptors.request.use(request => {
      if (request.method === 'get') {
        request.params = Object.assign(request.params || {}, { time: new Date().getTime() })
      }
      return request
    })

    request.interceptors.response.use(response => {
      const res = response.data
      return res
    })

    httpsAgent.interceptors.request.use(request => {
      let origin = request.data
      if (origin !== null) {
        request.data = {
          cipher: encrypt(origin)
        }
        if (process.env.NODE_ENV === 'development') {
          request.data.origin = origin
        }
      }
      return request
    })

    httpsAgent.interceptors.response.use(response => {
      const res = response.data
      return res
    })

    Object.defineProperties(Vue.prototype, {
      axios: {
        get () {
          return axios
        }
      },
      $https: {
        get () {
          return httpsAgent
        }
      },
      $request: {
        get () {
          return request
        }
      }
    })
  }
}
