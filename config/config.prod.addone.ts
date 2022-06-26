import { defineConfig } from 'umi';
import { BrowserAddoneExtensionsType } from '@hocgin/umijs-plugin-browser-addone';

export default defineConfig({
  define: {
    baseUrl: 'https://127.0.0.1:8080/api',
    ssoServerUrl: 'https://127.0.0.1:8080/login',
  },
  extraBabelPlugins: ['transform-remove-console'],
  plugins: ['@hocgin/umijs-plugin-browser-addone'],
  extensions: {
    icons: {
      16: 'logo.jpg',
    },
    contentScripts: [
      {
        matches: ['https://baidu.com/*'],
        entries: ['@/pages/_tpl/contentScripts/github'],
      },
      {
        matches: ['https://baidu.com/*', 'https://www.baidu.com/*'],
        entries: ['@/pages/_tpl/contentScripts/baidu'],
        runAt: 'document_end',
      },
    ],
    background: {
      serviceWorker: '@/pages/_tpl/background/index',
    },
  } as BrowserAddoneExtensionsType,
});
