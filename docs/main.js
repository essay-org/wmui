import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/styles/doc.css'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
