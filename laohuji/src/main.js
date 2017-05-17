import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import $ from 'jquery'
//import _ from 'lodash'
import routes from 'ROUTE/app-router'

import VeeValidate from 'vee-validate';    // 表单验证插件

var FastClick = require('fastclick');
FastClick.attach(document.body);

import 'mint-ui/lib/style.css'
Vue.use(VueRouter)
Vue.use(VueResource)



const router = new VueRouter({ //路由配置
  mode: (process.env.NODE_ENV == 'local') ? "hash" : "history",
  base: '/',
  linkActiveClass: 'active',
  routes: routes
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})