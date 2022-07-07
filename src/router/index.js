import { createRouter, createWebHistory } from 'vue-router'
import clients from '@/pages/clients.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: clients
  },
  {
    path: '/jokes',
    name: 'Very funny content',
    component: () => import(/* webpackChunkName: "about" */ '../pages/jokes.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
