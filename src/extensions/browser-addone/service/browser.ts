class Browser {
  type: string;

  constructor(type: 'chrome' | 'firefox') {
    this.type = type;
  }

  get browser(): any {
    if (this.type === 'firefox') {
      return browser;
    } else {
      return chrome;
    }
  }
}

const WebExtension: any = new Browser(
  (() => {
    if ('firefox'.includes(window.navigator.userAgent.toLowerCase())) {
      return 'firefox';
    } else {
      return 'chrome';
    }
  })(),
).browser;

export {WebExtension};
