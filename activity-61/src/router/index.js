import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Join from '@/components/Join'
import Vote from '@/components/Vote'
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
      component: Home,
    },
    {
      path: '/Join',
      name: 'Join',
      component: Join
    },
    {
      path: '/Vote/:activityId',
      name: 'Vote',
      component: Vote
    },
    {
      path: '/Successful',
      name: 'Successful',
      component: Successful
    }
  ]
})
