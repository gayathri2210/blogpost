import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '..IndexPage.vue';

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
