import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

// kiểm tra người dùng đăng nhập chưa, nếu rồi thì cho tuy cập còn không thì cho chuyển hướng đến trang đăng nhập
router.beforeEach((to, from, next) => {
  if (!store.state.isLoggedIn && to.name != 'login') {
    next({ name: 'login' })
  } else if (to.name == 'login' && store.state.isLoggedIn) {
    next(false)
  } else {
    next()
  }
})

export default router
