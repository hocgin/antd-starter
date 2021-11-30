import qs from 'query-string';

let initState = {
  paging: null,
  detail: null,
  complete: [],
};
export default {
  namespace: 'apps',
  state: initState,
  effects: {
    * worked({ payload, callback }: any, { call, put }: any) {
      console.log('worked');
    },
  },
  reducers: {},
  subscriptions: {
    setup({ dispatch, history }: any, done: any) {
      return history.listen(({ pathname, search }: any) => {
        const query = qs.parse(search);
        switch (pathname) {
          case '/': {
            // TODO
            break;
          }
          default: {
            console.log(pathname);
          }
        }
      });
    },
  },
};
