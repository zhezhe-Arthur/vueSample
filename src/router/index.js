import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import Jsplumb from '@/view/Jsplumb'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/Jsplumb',
      name: 'Jsplumb',
      component: Jsplumb
    }
  ]
})
