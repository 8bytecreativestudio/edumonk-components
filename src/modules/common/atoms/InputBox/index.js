import React from 'react';
import styles from './index.scss';

export default ({ onChange, value }) => (
  <input className={styles.input} onChange={event => onChange(event.target.value)} value={value} />
);
