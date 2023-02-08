import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Videos from '@/pages/Videos.vue'
import Sobre from '@/pages/Sobre.vue'
import Contato from '@/pages/Contato.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: Sobre,
    },
    {
      path: '/contato',
      name: 'contato',
      component: Contato,
    },
  ],
})

export default router
