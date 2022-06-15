import classnames from 'classnames';
import {WebExtension} from '../service/browser';


WebExtension.runtime.onInstalled.addListener(() => {
  let color = 'red';
  // chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);

  setInterval(() => {
    console.warn('background.ts', '$', classnames ?? 'undefined');
  }, 1000);
});

WebExtension.runtime.onMessage.addListener(
  (message: any, sender: any, sendResponse: any) => {
    console.log('收到消息');
  },
);
