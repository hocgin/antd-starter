import { defineConfig } from 'umi';
import { BrowserAddoneExtensionsType } from '@hocgin/umijs-plugin-browser-addone';
import pkg from '../package.json';
import { WebExtension } from '@hocgin/browser-addone-kit';

export default defineConfig({
  define: {
    // api 地址
    baseUrl: 'https://feed.hocgin.com',
    // 单点登录地址
    ssoServerUrl: 'https://sso.hocgin.com',
    projectId: pkg.name,
  },
  plugins: ['@hocgin/umijs-plugin-browser-addone'],
  extensions: {
    name: '__MSG_extension_name__',
    description: '__MSG_extension_description__',
    homepageUrl: `https://logspot.hocgin.top/${pkg.name}`,
    defaultLocale: 'en',
    icons: '../public/logo.png',
    action: {
      defaultTitle: '__MSG_extension_action_title__',
      defaultPopup: '@/pages/popup',
    },
    contentScripts: [
      WebExtension.kit.authorizationScriptConfig(['@/pages/contentscripts/authorization']),
      {
        matches: ['<all_urls>'],
        entries: ['@/pages/contentscripts'],
        runAt: 'document_end',
      },
    ],
    background: {
      serviceWorker: '@/pages/background/index',
    },
    permissions: ['contextMenus', 'storage', 'notifications'],
    hostPermissions: ['<all_urls>'],
  } as BrowserAddoneExtensionsType,
});
