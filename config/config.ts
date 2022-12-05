import { defineConfig } from 'umi';
import routerConfig from '../src/router.config';
import { resolve } from 'path';

export const CDNConfig = () => {
  let dirs = __dirname.split('/');
  let dirName = dirs[dirs.length - 2];
  let result = process.env.USE_CDN !== 'true' ? {} : {
    hash: true,
    publicPath: `https://cdn.hocgin.top/${dirName}/`,
  };
  console.info('正在装配 CDN 配置', result);
  return result;
};
export const SSRConfig = () => {
  let result = process.env.USE_SSR !== 'true' ? {} : {
    hash: true,
    ssr: {
      serverBuildPath: './dist_server/umi.server.js',
    },
  };
  console.info('正在装配 SSR 配置', result);
  return result;
};
export const useLogger = () => {
  let result: any = [];
  let offLogger = process.env.USE_LOG !== 'true';
  console.debug(`[${offLogger ? '禁用' : '启用'}]日志打印`);
  if (offLogger) {
    result.push([
      'transform-remove-console',
      { exclude: ['error', 'warn', 'info'] },
    ]);
  }
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
