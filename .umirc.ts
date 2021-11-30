import { defineConfig } from 'umi';
import routerConfig from './config/router.config';

export default defineConfig({
  title: 'HOCGIN',
  antd: {},
  dva: {},
  outputPath: './dist',
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  proxy: {
    '/api': {
      // target: 'https://api-dev.hocgin.top/',
      target: 'http://127.0.0.1:20001/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  routes: [...routerConfig],
});
