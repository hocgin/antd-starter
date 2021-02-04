import { Badge } from 'antd';
import React from 'react';

/**
 * success
 * error
 * default
 * processing
 * warning
 */
class EnumFormatter {

  /**
   * 开启状态
   */
  static enabled(selected) {
    let enums = { false: 'error', true: 'success' };
    let enumsName = { false: '禁用', true: '启用' };
    return this.status(enums, selected, enumsName[selected]);
  }

  static status(enums = {}, selected, title = 'N/A') {
    if (selected === null || selected === undefined) {
      return 'N/A';
    }
    return (<Badge status={enums[selected]} text={title} />);
  }
}

export default EnumFormatter;
