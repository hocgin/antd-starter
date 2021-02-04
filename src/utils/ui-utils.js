import memoizeOne from 'memoize-one';
import React from 'react';
import { message, Modal, Tree, TreeSelect } from 'antd';
import isEqual from 'lodash/isEqual';

export default class UiUtils {

  /**
   * 请求是否成功
   * @param result
   * @returns {boolean}
   */
  static isSuccess(result) {
    return result && result.success;
  }

  static showErrorMessageIfExits(result) {
    if (this.isSuccess(result)) {
      return true;
    }

    if (result.code !== 503) {
      message.error(result.message);
    }

    console.error('业务失败，响应内容::', result);
    return false;
  }

  static downloadUrl(event, { url, filename = 'unknown' }) {
    event.preventDefault();
    event.stopPropagation();
    const aElement = document.createElement('a');
    document.body.appendChild(aElement);
    aElement.style.display = 'none';
    aElement.href = url;
    aElement.download = filename;
    aElement.click();
    document.body.removeChild(aElement);
  }


};
