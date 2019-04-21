/*
  这是路由入口
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)

//引用组件
import Msite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
// 暴露路由
export default new VueRouter ({
  routes:[
    { path: '/', redirect: '/msite' },
    { path: "/msite", component: Msite, meta:{ FootShow: true } },
    { path: '/order', component: Order, meta:{ FootShow: true } },
    { path: '/profile', component: Profile, meta:{ FootShow: true } },
    { path: '/search', component: Search, meta:{ FootShow: true } },
    { path: '/login', component: Login }
  ]
})
