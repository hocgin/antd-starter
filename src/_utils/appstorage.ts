export enum StorageKeys {
}

export default class AppStorage {
  // --------------------------------------------------------------------------------------------------------------------

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }

  static setItem(key: string, value: any) {
    if (value === null || value === undefined) {
      return;
    }
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
  }

  static getItem(key: string): any | undefined {
    let value = localStorage.getItem(key);
    if (value === null || value === undefined) {
      return undefined;
    }
    return JSON.parse(value);
  }
}
