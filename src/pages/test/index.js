import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

@connect((...rest) => {
  console.log('arg1', rest);
  return {};
}, (...rest) => {
  console.log('arg2', rest);
  return {};
})
class index extends React.Component {
  render() {
    let {} = this.props;
    return (
      <div className={styles.page}>
      </div>
    );
  }
}

export default index;
