import Vue from 'vue'
import Vuex from 'vuex'

// import { createPersistedState } from 'vuex-electron'

import modules from './modules'
import global from './global.js'

Vue.use(Vuex)

export default new Vuex.Store({
  ...global,
  modules,
  plugins: [
    // createPersistedState()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
