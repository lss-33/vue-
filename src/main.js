import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Storage from './assets/lib/storage'
Vue.prototype.$Storage = Storage
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
