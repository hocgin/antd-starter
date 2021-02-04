import React from 'react';
import styles from './index.less';
import AppsModel from '@/models/apps';
import { dispatchType } from '@/utils/model-utils';

@connect(({ global, apps, loading, ...rest }) => {
  return {
    paging: apps?.paging,
    pagingLoading: loading.effects[dispatchType(AppsModel, AppsModel.effects.worked)],
  };
}, dispatch => ({
  $worked: (args = {}) => dispatch({ type: dispatchType(AppsModel, AppsModel.effects.worked), ...args }),
}))
class index extends React.Component {

  componentDidMount() {
    let { $worked } = this.props;
    $worked();
    // window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.handleResize);
  }


  render() {
    let {} = this.props;
    return (
      <div className={styles.page}>
      </div>
    );
  }
}

export default index;
