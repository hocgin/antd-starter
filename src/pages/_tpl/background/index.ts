import {WebExtension} from '@hocgin/browser-addone-kit';

enum ContextMenusId {
  About = 'About',
  Donate = 'About.Donate',
  Feedback = 'About.Feedback',
  Help = 'About.Help',
}

let updateContextMenus = async () => {
  await WebExtension.contextMenus.removeAll();
  {
    await WebExtension.contextMenus.create({
      id: ContextMenusId.About,
      title: "🎉 关于作者",
      contexts: ["action"]
    });

    await WebExtension.contextMenus.create({
      id: ContextMenusId.Donate,
      parentId: ContextMenusId.About,
      title: "💕 鼓励作者",
      contexts: ["action"],
    });

    await WebExtension.contextMenus.create({
      id: ContextMenusId.Feedback,
      parentId: ContextMenusId.About,
      title: "🤔 意见反馈",
      contexts: ["action"],
    });

    await WebExtension.contextMenus.create({
      id: ContextMenusId.Help,
      parentId: ContextMenusId.About,
      title: "🎶 帮助文档",
      contexts: ["action"],
    });
  }
  console.log('新增完成');
};

WebExtension.runtime.onInstalled.addListener(async () => {
  let color = 'red';
  // chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  await updateContextMenus();
});
WebExtension.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === ContextMenusId.Feedback) {
    WebExtension.tabs.create({url: 'https://www.hocgin.top/feedback'});
  } else if (info.menuItemId === ContextMenusId.Donate) {
    WebExtension.tabs.create({url: 'https://www.hocgin.top/donate'});
  } else {
    WebExtension.tabs.create({url: 'https://www.hocgin.top/help'});
  }
});

