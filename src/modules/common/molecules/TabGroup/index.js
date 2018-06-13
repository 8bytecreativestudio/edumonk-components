import React from 'react';
import styles from './index.scss';

const TabGroup = ({ children }) => {
  return <div className={styles.first}>{children}</div>;
};

export default TabGroup;
