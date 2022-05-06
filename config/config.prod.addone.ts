import { defineConfig } from 'umi';
import path from 'path';

let projectPath = path.resolve(__dirname, '../src');

export default defineConfig({
  define: {
    baseUrl: 'https://127.0.0.1:8080/api',
    ssoServerUrl: 'https://127.0.0.1:8080/login',
  },
  extraBabelPlugins: ['transform-remove-console'],
  manifest: false,
  devServer: {
    writeToDisk: true,
  },
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  copy: ['src/extensions/browser-addone/resources'],
  chainWebpack(memo, { env }) {
    memo.devServer.hot = false as any;
    memo.plugins.delete('hmr');
    memo
      .entry('background')
      .add(
        path.resolve(
          projectPath,
          'extensions/browser-addone/scripts/background.ts',
        ),
      )
      .end()
      .entry('content-script')
      .add(
        path.resolve(
          projectPath,
          'extensions/browser-addone/scripts/content-script.ts',
        ),
      )
      .end();
  },
});
