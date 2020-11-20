// ref: https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  title: 'title',
  antd: {},
  dva: {},
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  outputPath: './dist',
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
