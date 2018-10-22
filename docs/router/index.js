import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Docs from '../components/Docs.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  linkActiveClass: 'current',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/docs/:componentName?',
      name: 'docs',
      component: Docs
    },
    {
      path: '*',
      name: '404',
      component: Index
    }
  ]
})
