import Vue from 'vue'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  router,
  //render: h => h(App),
  render(h) {
    return h({ template: '<router-view></router-view>'})
  }
}).$mount('#app')
