import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Docs from '../components/Docs.vue'

Vue.use(Router)
export default new Router({
  mode: 'hash',
  linkActiveClass: 'current',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Docs
    },
    {
      path: '/docs/:componentName?',
      name: 'Docs',
      component: Docs
    },
    {
      path: '*',
      name: '404',
      component: Docs
    }
  ]
})
