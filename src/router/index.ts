import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import doublechromosphere from '../views/doublechromosphere/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/doublechromosphere',
    name: 'doublechromosphere',
    component: doublechromosphere
  },
]

const router = new VueRouter({
  routes
})

export default router
