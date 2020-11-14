import { defineConfig, utils } from 'umi';

const { winPath } = utils;

// ref: https://umijs.org/config/
export default defineConfig({
  title: 'title',
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    default: 'zh-CN',
    baseNavigator: true,
  },
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  outputPath: './dist',
  lessLoader: { javascriptEnabled: true },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
      ],
    },
  ],
});
