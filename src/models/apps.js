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
    * worked({ payload, callback }, { call, put }) {
      console.log('worked');
    },
  },
  reducers: {},
  subscriptions: {
    setup({ dispatch, history }, done) {
      return history.listen(({ pathname, search }) => {
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
