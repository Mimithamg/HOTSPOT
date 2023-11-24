// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import DisasterPage from '@/components/DisasterPage.vue'
import HomeView from '@/views/HomeView.vue'
import ThemePage from '@/components/ThemePage.vue';

const routes = [
  {
    path: '/',
    name: 'disaster',
    component: DisasterPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/theme',
    name: 'theme',
    component: ThemePage, // Use the Theme component for the /theme route
  },
  // Add more routes as needed
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
