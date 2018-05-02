import React from 'react';
import classnames from 'classnames';

import styles from './index.scss';

export default ({ children, className }) => <p className={classnames(styles.cardHeading, className)}>{children}</p>;
