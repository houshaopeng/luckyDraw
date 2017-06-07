import Vue from 'vue'
import Router from 'vue-router'
import laohuji from '@/pages/laohuji'
import login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'laohuji',
      component: laohuji
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
