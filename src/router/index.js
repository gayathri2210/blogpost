import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '../pages/IndexPage.vue'; // Adjusted import path

const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
