import { 
  merge,
  mapValues,
  get,
  assign,
  trim,
  isNil,
  forEach,
  concat,
  filter,
  cloneDeep,
  omit,
  keys,
  find,
  findIndex,
  isArray,
  isObject,
  split,
  join,
  toNumber,
  isEmpty,
  slice,
  isNaN,
  remove,
  pick,
  sortBy,
  differenceWith,
  isEqual
} from 'lodash'
import moment from 'moment'
// import echarts from './echarts' // 按需加载 需要用时自己打开引用
import url from '@/utils/url'

const lodashFn = {
  '_get': get,
  '_merge': merge,
  '_assign': assign,
  '_trim': trim,
  '_isNil': isNil,
  '_forEach': forEach,
  '_concat': concat,
  '_filter': filter,
  '_cloneDeep': cloneDeep,
  '_omit': omit,
  '_keys': keys,
  '_find': find,
  '_findIndex': findIndex,
  '_isArray': isArray,
  '_isObject': isObject,
  '_split': split,
  '_join': join,
  '_toNumber': toNumber,
  '_isEmpty': isEmpty,
  '_slice': slice,
  '_isNaN': isNaN,
  '_remove': remove,
  '_pick': pick,
  '_sortBy': sortBy,
  '_differenceWith': differenceWith,
  '_isEqual': isEqual
}

export default {
  install (Vue) {
    if (this.installed) return

    this.installed = true

    const obj = merge({a: 1})

    console.log(obj)

    moment.locale('zh-cn')

    Object.defineProperties(Vue.prototype, mapValues(lodashFn, fn => {
      return {
        get () {
          return fn
        }
      }
    }))
    Object.defineProperties(Vue.prototype, {
      $moment: {
        get () {
          return moment
        }
      },
      // $echarts: {
      //   get () {
      //     return echarts
      //   }
      // },
      $url: {
        get () {
          return url
        }
      }
    })
  }
}
