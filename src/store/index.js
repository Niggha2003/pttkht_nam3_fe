import { createStore } from 'vuex'

export default createStore({
  state: {
    role: '',
    isLoggedIn: false
  },
  mutations: {
    changeRole(state, role) {
      state.role = role
    },
    login(state) {
      state.isLoggedIn = true
    }
  },
  actions: {},
  getters: {}
})
