import { defineConfig } from 'umi';
let dirs = __dirname.split('/');
let dirName = dirs[dirs.length - 2];

export default defineConfig({
  define: {
    // api 地址
    baseUrl: 'http://127.0.0.1:8000',
    // 单点登录地址
    ssoServerUrl: 'http://127.0.0.1:8000/login',
  },
  hash: true,
  // cdn 地址
  publicPath: `https://cdn.hocgin.top/${dirName}/`,
  extraBabelPlugins: ['transform-remove-console'],
});
