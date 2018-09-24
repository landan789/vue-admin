import Vue from 'vue'
import App from './App.vue'
import indexRouter from './routers/index'
import store from './store'
import './registerServiceWorker'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

new Vue({
  router: indexRouter,
  store,
  render: h => h(App)
}).$mount('#app')