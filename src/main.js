import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store/store'
import routers from './router/router'
import bootstrap from 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './style/common.css'

Vue.use(VueRouter)
Vue.use(bootstrap)
Vue.use(MuseUI)
Vue.use(Vuex)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  router,
  template: '<App/>',
  components: {App},
  store
}).$mount('#app')
