import Vue from 'vue'
import App from './App.vue'
import router from './router'
import item from './data.js'

Vue.config.productionTip = false

let data = {
  items: item,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
