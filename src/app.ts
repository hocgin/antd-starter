import { addLocale, getAllLocales, localeInfo } from 'umi';
import '@/request.config';

// 国际化配置
getAllLocales().forEach((locale) => {
  let momentLocale =
    {
      'zh-CN': 'zh-cn',
      'en-US': 'en',
    }[locale] ?? 'zh-cn';
  let localeItem = localeInfo[locale];
  addLocale(locale, localeItem.messages, {
    antd: localeItem.antd,
    momentLocale: !!localeItem.momentLocale
      ? localeItem.momentLocale
      : momentLocale,
  });
});

// 全局状态配置
export async function getInitialState() {
  return {
    author: 'hocgin',
  };
}
