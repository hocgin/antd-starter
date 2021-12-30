import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    // api 地址
    baseUrl: 'http://127.0.0.1:8000',
    // 单点登录地址
    ssoServerUrl: 'http://127.0.0.1:8000/login',
  },
  hash: true,
  favicon: 'https://hocg.in/favicon.ico',
  // cdn 地址
  publicPath: `https://127.0.0.1:8000/${__dirname.split('/').pop()}/`,
});
