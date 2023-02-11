import { createRouter, createWebHistory } from 'vue-router';
import HomeSample from '@/components/pages/home-sample.vue';

const routes = [
  {
    path: '/',
    name: 'HomeSample',
    component: HomeSample,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
