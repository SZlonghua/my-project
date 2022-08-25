import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/global.css'

import App from './App'
import router from './router'
import store from './store'
import electron from 'electron'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
// Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // console.log(electron.remote.app)
  console.log('router to ' + to.path)
  if (!store.state.init) {
    store.commit('init', electron.remote)
  }

  let isAuthenticated = store.getters.isAuthenticated
  console.log('isAuthenticated: ' + isAuthenticated)
  if (to.path !== '/login' && !isAuthenticated) {
    next({ path: '/login' })
  } else next()
})

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
