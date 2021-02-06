import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Board from '@/components/Board.vue'
import Card from '@/components/Card.vue'
import NotFound from '@/components/NotFound.vue'

import Info from '@/components/Info.vue'
import Skills from '@/components/Skills.vue'
import Education from '@/components/Education.vue'

import PostList from '@/components/PostList.vue'
import PostView from '@/components/PostView.vue'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  store.getters.isAuth ? next() : next(loginPath)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/b/:bid', component: Board, children: [
        { path: 'c/:cid', component: Card }
      ] },

    { path: '/info', component: Info },
    { path: '/skills', component: Skills },
    { path: '/edu', component: Education, beforeEnter: requireAuth },

    { path: '/posts', component: PostList },
    { path: '/posts/:pid', component: PostView },

    { path: '*', component: NotFound }
  ]
})

export default router