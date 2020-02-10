import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import handle from '../pages/handle.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/handle',
    component: handle
  }, {
    path: '*',
    redirect: '/'
  }]
})

export default router
