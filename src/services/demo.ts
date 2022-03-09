import { stringify } from 'query-string';
import { Utils, useGet } from '@hocgin/ui';

export default class {
  static ssr({ id, ...payload }: any): Promise<string> {
    let queryString = stringify(payload);
    return useGet(`/api/ssr?${queryString}`)
      .then(Utils.Struct.thenShowErrorIfExits)
      .then(Utils.Struct.thenData);
  }
}
