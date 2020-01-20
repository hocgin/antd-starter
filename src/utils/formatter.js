import moment from 'moment';

/**
 * 统一处理时间格式化
 */
export default class Formatter {
  static yyyyMMdd = 'yyyyMMdd';

  /**
   * 格式化时间
   * @param timestamp
   * @param format
   * @returns {string}
   */
  static format(timestamp, format) {
    return moment(timestamp * 1).format(format);
  }


}