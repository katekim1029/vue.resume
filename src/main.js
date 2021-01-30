import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const Login = { template: '<div class="login">Login Page</div>' }
const NotFound = { template: '<div class="notfound">Page not found</div>' }

const routes = {
  '/' : App,
  '/login' : Login
}

new Vue({
  computed: {
    VueComponent() {
      return routes[window.location.pathname] || NotFound
    }
  },
  //render: h => h(App),
  render(h) {
    return h(this.VueComponent)
  }
}).$mount('#app')
