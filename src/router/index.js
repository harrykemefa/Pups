import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },

    { 
      path: '/info/:breed',
      name: 'Pups Info',
      component: () => import('@/views/Info.vue'),
    },
  ]
})

export default router
