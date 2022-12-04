import { addLocale, getAllLocales } from 'umi';
import 'dayjs/locale/zh-cn';
import '@/request.config';

// 国际化配置
getAllLocales().forEach((locale) => {
  // let momentLocale =
  //   {
  //     'zh-CN': 'zh-cn',
  //     'en-US': 'en',
  //   }[locale] ?? 'zh-cn';
  // let localeItem = localeInfo[locale];
  // addLocale(locale, localeItem.messages, {
  //   antd: localeItem.antd,
  //   momentLocale: !!localeItem.momentLocale
  //     ? localeItem.momentLocale
  //     : momentLocale,
  // });
});
