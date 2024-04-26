import { createStore } from 'vuex'

export default createStore({
  state: {
    user: JSON.parse(sessionStorage.getItem('user')),
    isLoggedIn: sessionStorage.getItem('isLoggedIn')
  },
  mutations: {
    changeUser(state, user) {
      sessionStorage.setItem('user', user)
      state.user = JSON.parse(sessionStorage.getItem('user'))
    },
    login(state, isLoggedIn) {
      sessionStorage.setItem('isLoggedIn', isLoggedIn)
      state.isLoggedIn = sessionStorage.getItem('isLoggedIn')
    }
  },
  actions: {},
  getters: {}
})
