// ref: https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  title: 'title',
  antd: {},
  dva: {},
  outputPath: './dist',
  // exportStatic: {
  //   htmlSuffix: true,
  //   dynamicRoot: true,
  // },
  // proxy: {
  //   '/chaos': {
  //     'target': 'http://jsonplaceholder.typicode.com/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/chaos': '' },
  //   },
  // },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
      ],
    },
  ],
});
