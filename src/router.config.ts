export default [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', component: '@/pages/index' },
      { path: '/ssr', component: '@/pages/ssr' },
    ],
  },
  { component: '@/pages/404' },
];
