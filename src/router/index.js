import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import AdminMain from '@/components/AdminMain'
import AdminUser from '@/components/AdminUser'

Vue.use(Router)

export default new Router({
  // mode: history,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: "/blackhole",
      name: "AdminMain",
      component: AdminMain
    },
    {
      path: "/blackhole/user",
      name: "AdminUser",
      component: AdminMain
    },
  ]
})
