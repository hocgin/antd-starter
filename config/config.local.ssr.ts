import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {
    devServerRender: true,
  },
  hash: true,
  define: {
    // api 地址
    baseUrl: 'http://127.0.0.1:8000',
    // 单点登录地址
    ssoServerUrl: 'http://127.0.0.1:8000/login',
  },
});
