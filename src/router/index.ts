import { createRouter, createWebHistory } from 'vue-router';
import HomeSample from '@/components/pages/home-sample.vue';
import NextSample from '@/components/pages/next-sample.vue';

const routes = [
  {
    path: '/',
    name: 'HomeSample',
    component: HomeSample,
    meta: { title: 'ホームサンプル'},
  },
  {
    path: '/next/sample',
    name: 'NextSample',
    component: NextSample,
    meta: { title: 'ネクストサンプル'},
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



const DEFAULT_TITLE = '夢の王国'
//
router.afterEach((to) => {
  // const title = to.meta.title? ${to.meta.title} | ${DEFAULT_TITLE} : DEFAULT_TITLE;
  document.title = to.meta.title ? to.meta.title + ' | ' + DEFAULT_TITLE: DEFAULT_TITLE;
})

export default router;
