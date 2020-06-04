import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import enrich from './enrich'

Vue.config.productionTip = false

// 加载插件
enrich(Vue)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
