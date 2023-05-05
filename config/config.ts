import { defineConfig } from 'umi';
import routerConfig from '../src/router.config';
import { resolve } from 'path';
import pkg from '../package.json';

const enabled = (key: 'USE_CDN' | 'USE_SSR' | 'USE_LOG') => {
  return `${process.env[`${key.toUpperCase()}`]}`.toLowerCase() === 'true';
};
export const CDNConfig = () => {
  let dirs = __dirname.split('/');
  let dirName = dirs[dirs.length - 2];
  let result = enabled('USE_CDN') ? {
    hash: true,
    publicPath: `https://cdn.hocgin.top/${dirName}/`,
  } : {};
  console.info('正在装配 CDN 配置', result);
  return result;
};
export const SSRConfig = () => {
  let result = enabled('USE_SSR') ? {
    hash: true,
    ssr: {
      serverBuildPath: './dist_server/umi.server.js',
    },
  } : {};
  console.info('正在装配 SSR 配置', result);
  return result;
};
export const useLogger = () => {
  let result: any = enabled('USE_LOG') ? [[
    'transform-remove-console',
    { exclude: ['error', 'warn', 'info'] },
  ]] : [];

  console.debug(`正在装配 LOG 配置`, result);
  return result;
};

export default defineConfig({
  title: 'HOCGIN',
  locale: {
    antd: true,
  },
  antd: {
    import: false,
  },
  dva: {},
  model: {},
  alias: {
    '@': resolve('../src'),
  },
  define: {
    projectId: pkg.name,
  },
  initialState: {},
  qiankun: {
    slave: {
      shouldNotModifyDefaultBase: true,
    },
  },
  outputPath: './dist' as any,
  favicons: ['https://cdn.hocgin.top/uPic/favicon.ico'],
  manifest: {
    fileName: `manifest.json`,
  },
  fastRefresh: true,
  proxy: {
    '/api': {
      // => 转到服务端地址
      target: 'http://127.0.0.1:20001/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  theme: {},
  routes: [...routerConfig],
  extraBabelPlugins: [
    ...useLogger(),
  ],
  ...SSRConfig(),
  ...CDNConfig(),
});
