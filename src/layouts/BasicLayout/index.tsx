import styles from './index.less';
import React from 'react';
import { Outlet } from 'umi';

const BasicLayout: React.FC<{}> = () => {
  return (<div className={styles.normal}>
    <h1 className={styles.title}>Yay! Welcome to umi!</h1>
    <Outlet />
    {/*<Footer />*/}
  </div>);
};
export default BasicLayout;
