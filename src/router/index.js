import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categorias',
      name: 'categoria',
      component: () => import('../views/CategoriaView.vue')
    },
    {
      path: '/livros',
      name: 'livro',
      component: () => import('../views/LivroView.vue')
    }
  ]
})

export default router