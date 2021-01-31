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
    { path: '/edu', component: Education },
    { path: '*', component: NotFound }
  ]
})

export default router