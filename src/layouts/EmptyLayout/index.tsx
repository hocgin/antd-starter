import styles from './index.less';
import React from 'react';

const EmptyLayout: React.FC<{}> = (props, ref) => {
  return (<div className={styles.component}>
    {props.children}
  </div>);
};
export default EmptyLayout;
