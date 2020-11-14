// ref: https://umijs.org/config/
export default {
  title: 'title',
  antd: {},
  dva: {},
  outputPath: './dist',
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: './index' },
      ],
    },
  ],
};
