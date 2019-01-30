import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/home/Main'
import Login from '@/components/home/Login'
import AdminMain from '@/components/admin/Main'
import PostList from '@/components/admin/post/list'

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
    {
      path: "/blackhole/post",
      name: "PostList",
      component: PostList
    },
  ]
})
