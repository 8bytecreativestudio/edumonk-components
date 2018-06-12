import React from 'react';
import { Icon, Avatar } from 'antd';
import styles from './index.scss';

export default () => {
  return (
    <div className={styles.header}>
      <div>
        <Icon type="menu-fold" style={{ fontSize: 25, color: 'grey' }} />
      </div>
      <div>
        <Avatar icon="user" />
        <span className={styles.header_name}> Kabir Pokharel</span>
      </div>
    </div>
  );
};
