const state = {
  main: 0
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  }
}

const actions = {
  resetState: {
    root: true,
    handler ({ commit }) {
      console.log('Counter resetState')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
