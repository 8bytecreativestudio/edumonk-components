import React from 'react';
import classnames from 'classnames';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.scss';

const P = ({ children, standard, className, displayClock }) => (
  <p className={classnames(styles.one, standard, className)}>
    {displayClock && (
      <span style={{ display: 'inline', paddingRight: '0.3rem' }}>
        <Icon type="clock-circle-o" />
      </span>
    )}
    {children}
  </p>
);
P.propTypes = {
  standard: PropTypes.string,
  className: PropTypes.string,
  displayClock: PropTypes.bool
};

P.defaultProps = {
  displayClock: false
};
export default P;
