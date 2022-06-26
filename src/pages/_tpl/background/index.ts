import { WebExtension } from '@hocgin/browser-addone-kit';

WebExtension.runtime.onInstalled.addListener(() => {
  let color = 'red';
  // chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
