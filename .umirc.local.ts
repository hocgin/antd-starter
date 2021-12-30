import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    baseUrl: 'http://127.0.0.1:8000',
    ssoServerUrl: 'http://127.0.0.1:8000/login',
  },
});
