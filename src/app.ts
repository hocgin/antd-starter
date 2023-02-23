import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import '@/request.config';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-tw';
import 'dayjs/locale/en';
import { I18nKit } from '@hocgin/browser-addone-kit';

dayjs.extend(relativeTime);
dayjs.locale(I18nKit.getMessageOrDefault('lang', 'en'));

// 全局状态配置
export async function getInitialState() {
  return {
    author: 'hocgin',
  };
}
