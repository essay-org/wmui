import Vue from 'vue'
import App from './App.vue'
import router from './router'
import wmui from '../packages'
import comps from './example-components/config.js'
import '../src/theme-default/index.scss'
Vue.use(wmui)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
