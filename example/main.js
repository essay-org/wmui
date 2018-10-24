import Vue from 'vue'
import App from './App.vue'
import router from './router'
import wmui from '../packages'
import comps from './example-components/config.js'
import '../src/theme-default/index.scss'
import '../src/theme-default/fonts/iconfont.css'
Vue.use(wmui)

// 注册演示组件
/* comps.forEach(component => {
  Vue.components(component, () => require(`./example-components/${component}.vue`))
}) */
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
