import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Join from '@/components/Join'
import Vote from '@/components/Vote'
import Detail from '@/components/Detail'
import Canvassing from '@/components/Canvassing'
import Rule from '@/components/Rule'
import Successful from '@/components/Successful'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Join',
      name: 'Join',
      component: Join
    },
    {
      path: '/Vote',
      name: 'Vote',
      component: Vote
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Canvassing',
      name: 'Canvassing',
      component: Canvassing
    },
    {
      path: '/Rule',
      name: 'Rule',
      component: Rule
    },
    {
      path: '/Successful',
      name: 'Successful',
      component: Successful
    }
  ]
})
