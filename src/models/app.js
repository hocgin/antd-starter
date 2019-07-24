import qs from "query-string";

export default {
  namespace: 'app',
  state: {
  },
  effects: {
  },
  reducers: {
  },
  subscriptions: {
    setup({ dispatch, history }, done) {
      return history.listen(({ pathname, search }) => {
        const query = qs.parse(search);
        switch (pathname) {
          default:{
            console.log(pathname);
          }
        }
      });
    },
  },
};