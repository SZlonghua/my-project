import { _getUserCache } from '../common/cache.js'
const state = {
  init: false,
  user: {},
  userCache: {}
}

const getters = {
  isAuthenticated (state) {
    if (state.user && state.user.email && state.user.password) {
      return true
    }
    return false
  }
}

const mutations = {
  saveUser (state, user) {
    state.userCache._saveUser(user)
    state.user = user
  },
  resetState (state) {
    state.userCache._saveUser({})
    state.user = {}
    state.init = false
  },
  init (state, remote) {
    let rootPath = remote.app.getPath('userData')
    state.userCache = _getUserCache(rootPath)
    state.user = state.userCache._getUser()
    state.init = true
  },
  logout (state) {
    state.userCache._saveUser({})
    state.user = {}
    state.init = false
  }
}

const actions = {
  saveUser ({ commit, state }, user) {
    return new Promise(function (resolve, reject) {
    // console.log('before:' + JSON.stringify(user) + 'saveuser actions:' + JSON.stringify(state.user))
      commit('saveUser', user)
      resolve(user)
    })
  },
  resetState ({ commit, state }) {
    console.log('global resetstate')
    commit('resetState')
  },
  logout ({ commit }) {
    // console.log('-------------------')
    commit('resetState')
  },
  // init ({ commit, state }, remote) {
  //   console.log(remote.app.getPath('userData'))
  //   commit('init', { user: _getUser() })
  // },
  test ({ commit, dispatch }, user) {
    dispatch('saveUser', user).then(r => {
      console.log(r)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
