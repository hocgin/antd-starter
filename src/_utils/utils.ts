export default class Utils {
  static isExtension(): boolean {
    let protocol = `${window.location.protocol}`;
    return !(protocol.startsWith('http') || protocol.startsWith('https'));
  }

  static isObject(obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }

  static isArray(arr: any): boolean {
    return Array.isArray(arr)
  }

  static merge(target: any, ...arg: any): any {
    return arg.reduce((acc: any, cur: any) => {
      return Object.keys(cur).reduce((subAcc, key) => {
        const srcVal = cur[key]
        if (Utils.isObject(srcVal)) {
          subAcc[key] = Utils.merge(subAcc[key] ? subAcc[key] : {}, srcVal)
        } else if (Utils.isArray(srcVal)) {
          // series: []，下层数组直接赋值
          subAcc[key] = srcVal.map((item: any, idx: number) => {
            if (Utils.isObject(item)) {
              const curAccVal = subAcc[key] ? subAcc[key] : []
              return Utils.merge(curAccVal[idx] ? curAccVal[idx] : {}, item)
            } else {
              return item
            }
          })
        } else {
          subAcc[key] = srcVal
        }
        return subAcc
      }, acc)
    }, target)
  }

  static openUrl(url: string, useNewTab: boolean = false) {
    window.open(url, useNewTab ? '_blank' : '_self');
  }

  static useTheme(theme: 'auto' | 'dark' | 'light' = 'auto') {
    let storedTheme = theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (storedTheme) {
      document.documentElement.setAttribute('data-theme', storedTheme)
    }
  }
}
