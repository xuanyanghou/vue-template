import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import { LoadingBar } from 'view-design'

Vue.use(Router)

const config = {
  base: process.env.VUE_APP_ROUTE_BASE,
  routes
}
// 本地访问去掉mode属性
if (process.env.VUE_APP_NODE_ENV !== 'location') {
  config.mode = 'history'
}
const router = new Router(config)

router.beforeEach((to, from, next) => {
  console.log(to, from)
  LoadingBar.start()
  next()
})

router.afterEach(to => {
  console.log(to)
  LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
