import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Example from '../components/Example.vue'
Vue.use(Router)
export default new Router({
  linkActiveClass: 'current',
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/example/:componentName?',
      name: 'example',
      component: Example
    },
    {
      path: '*',
      name: '404',
      component: Index
    }
  ]
})
