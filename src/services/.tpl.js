import request from '@/utils/request';
import { stringify } from 'query-string';

export default class TplApi {
  static getOne({ id, ...payload }) {
    let queryString = stringify(payload);
    return request(`/ums/user-group/${id}?${queryString}`, {
      method: 'GET',
    });
  }

  static paging(payload) {
    return request(`/ums/user-group/_paging`, {
      method: 'POST',
      body: { ...payload },
    });
  }

  static insert(payload) {
    return request(`/ums/user-group`, {
      method: 'POST',
      body: { ...payload },
    });
  }

  static update({ id, ...payload }) {
    return request(`/ums/user-group/${id}`, {
      method: 'PUT',
      body: { ...payload },
    });
  }

  static delete({ id, ...payload }) {
    let queryString = stringify(payload);
    return request(`/ums/user-group/${id}?${queryString}`, {
      method: 'DELETE',
    });
  }

  static complete(payload = {}) {
    return request(`/ums/user-group/_complete`, {
      method: 'POST',
      body: { ...payload },
    });
  }
}
