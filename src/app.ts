import Config from './config';
import { RequestConfig, ErrorShowType, isBrowser, addLocale, getAllLocales, localeInfo } from 'umi';

// 国际化配置
getAllLocales().forEach(locale => {
  let momentLocale = {
    'zh-CN': 'zh-cn',
    'en-US': 'en',
  }[locale] ?? 'zh-cn';
  let localeItem = localeInfo[locale];
  addLocale(locale, localeItem.messages, {
    antd: localeItem.antd,
    momentLocale: !!localeItem.momentLocale ? localeItem.momentLocale : momentLocale,
  });
});

// 全局状态配置
export async function getInitialState() {
  return {
    author: 'hocgin',
  };
}

// 网络请求配置
export const request: RequestConfig = {
  timeout: 5 * 10000,
  errorConfig: {
    adaptor: (preData: any) => {
      let result: any = {
        showType: ErrorShowType.ERROR_MESSAGE,
      };

      try {
        result = {
          ...result,
          errorMessage: preData?.message,
          ...preData,
        };
      } catch (e) {
        result = {
          ...result,
          success: false,
          errorMessage: '响应数据格式解析错误',
        };
      }
      return result;
    },
  },
  middlewares: [
    async (ctx: any, next: any) => {
      await next();
    },
  ],
  requestInterceptors: [
    // 默认请求头
    (url: string, options: any) => {
      url = `${Config.getBaseUrl()}${url}`;
      console.debug('[请求拦截器]::', '附带请求头');
      const defaultOptions = {
        credentials: 'include',
      };
      const newOptions = {
        ...defaultOptions,
        ...options,
      } as any;

      if (Config.isDev()) {
        newOptions.headers['X-Username'] = 'hocgin';
      }

      let pageUrl = 'https://www.hocgin.top';
      if (isBrowser()) {
        pageUrl = window.location.href;
      }

      newOptions.headers = {
        'X-Page-Url': pageUrl,
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8',
        Origin: url,
        ...newOptions.headers,
      };

      return { url, options: newOptions };
    },
  ],
  responseInterceptors: [
    // 认证检查
    (response: Response, options: any) => {
      console.debug('[响应拦截器]::', '认证检查');
      if (response.status === 401) {
        response.clone().json().then(({ redirectUrl }: any) => {
          if (isBrowser()) {
            window.location.href = `${Config.getSsoServerUrl()}?redirectUrl=${
              redirectUrl ?? window.location.href
            }`;
          }
        });
        // throw new Error('认证失败');
      }
      return response;
    },
    async (response: Response, options: any) => {
      try {
        await response.clone().json();
      } catch (e) {
        throw new Error('响应数据格式解析错误');
      }
      return response;
    },
  ],
};
