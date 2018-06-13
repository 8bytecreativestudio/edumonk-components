import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.scss';

const Tag = ({ text, styleTag }) => <span className={classnames(styles.tagStyle, styleTag)}>{text}</span>;

Tag.propTypes = {
  text: PropTypes.string
};

export default Tag;
