import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Welcome from '../views/Welcome.vue'

Vue.use(VueRouter)
  const routes: Array<RouteConfig> = [
  { path: '/',      name: 'Welcome', component: Welcome },
  { path: '/about', name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

export default new VueRouter({
  routes: routes
})
