// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router/nav_bottom.js'

import Swiper from 'vue-awesome-swiper'
Vue.use(Swiper)

import Vuex from 'vuex'
Vue.use(Vuex)
import store from './store/store.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
