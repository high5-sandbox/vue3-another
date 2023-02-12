import { createRouter, createWebHistory } from 'vue-router';
import HomeSample from '@/components/pages/home-sample.vue';
import NextSample from '@/components/pages/next-sample.vue';

const routes = [
  {
    path: '/',
    name: 'HomeSample',
    component: HomeSample,
  },
  {
    path: '/next/sample',
    name: 'NextSample',
    component: NextSample,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
