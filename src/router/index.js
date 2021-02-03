import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Board from '@/components/Board.vue'
import Card from '@/components/Card.vue'
import NotFound from '@/components/NotFound.vue'

import Info from '@/components/Info.vue'
import Skills from '@/components/Skills.vue'
import Education from '@/components/Education.vue'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/b/:bid', component: Board, beforeEnter: requireAuth, children: [
        { path: 'c/:cid', component: Card, beforeEnter: requireAuth }
      ] },
    { path: '/info', component: Info, beforeEnter: requireAuth },
    { path: '/skills', component: Skills, beforeEnter: requireAuth },
    { path: '/edu', component: Education, beforeEnter: requireAuth },
    { path: '*', component: NotFound }
  ]
})

export default router