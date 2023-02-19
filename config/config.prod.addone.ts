import { defineConfig } from 'umi';
import { BrowserAddoneExtensionsType } from '@hocgin/umijs-plugin-browser-addone';
import pkg from '../package.json';

export default defineConfig({
  define: {
    // api 地址
    baseUrl: '',
    // 单点登录地址
    ssoServerUrl: '/login',
    projectId: pkg.name,
  },
  plugins: ['@hocgin/umijs-plugin-browser-addone'],
  extensions: {
    name: '__MSG_extension_name__',
    description: '__MSG_extension_description__',
    defaultLocale: 'en',
    icons: '../public/logo.png',
    action: {
      defaultTitle: '__MSG_extension_action_title__',
      defaultPopup: '@/pages/popup',
    },
    contentScripts: [
      {
        matches: ['<all_urls>'],
        entries: ['@/pages/contentscripts'],
        runAt: 'document_end',
      },
    ],
    background: {
      serviceWorker: '@/pages/background/index',
    },
    permissions: ['contextMenus', 'webRequest', 'storage', 'notifications'],
    hostPermissions: ['<all_urls>'],
  } as BrowserAddoneExtensionsType,
});
