import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

const Login = { template: '<div class="login">Login Page</div>' }
const NotFound = { template: '<div class="notfound">Page not found</div>' }

const router = new VueRouter({
  mode: 'history',
  routes : [
    { path: '/', component: App },
    { path: '/login', component: Login },
    { path: '*', component: NotFound }
  ]
})

new Vue({
  router,
  //render: h => h(App),
  render(h) {
    return h({ template: '<router-view></router-view>'})
  }
}).$mount('#app')
