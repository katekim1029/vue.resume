import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Board from '@/components/Board.vue'
import Card from '@/components/Card.vue'
import NotFound from '@/components/NotFound.vue'
import Goodbye from '@/components/Goodbye.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes : [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/b/:bid', component: Board, children: [
        { path: 'c/:cid', component: Card }
      ] },
    { path: '/goodbye', component: Goodbye, name: 'goodbye' },
    { path: '*', component: NotFound }
  ]
})

export default router