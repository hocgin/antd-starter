import styles from './index.less';
import React from 'react';
import { default as theme } from '@/theme';
import { Footer } from '@hocgin/ui';
import { ConfigProvider } from 'antd';

const BasicLayout: React.FC<{ children: any }> = ({ children }) => {
  return (<ConfigProvider theme={{ token: theme }}>
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {children}
      <Footer />
    </div>
  </ConfigProvider>);
};
export default BasicLayout;
