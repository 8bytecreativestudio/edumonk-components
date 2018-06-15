import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.scss';

const Tag = ({ text, completeTag }) => <span className={classnames(styles.tagStyle, completeTag)}>{text}</span>;

Tag.propTypes = {
  text: PropTypes.string
};

export default Tag;
