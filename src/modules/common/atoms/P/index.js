import React from 'react';
import classnames from 'classnames';
import styles from './index.scss';

const P = ({ children, standard }) => <p className={classnames(styles.one, standard)}>{children}</p>;

export default P;
