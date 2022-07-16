import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import figureNodeList from '@/view/figureNodeList'
import calculation from '@/view/calculation'
import tableTest from '@/view/tableTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/figureNodeList',
      name: 'figureNodeList',
      component: figureNodeList
    },
    {
      path: '/calculation',
      name: 'calculation',
      component: calculation
    },
    {
      path: '/tableTest',
      name: 'tableTest',
      component: tableTest
    }
  ]
})
