import React from 'react';
import PropTypes from 'prop-types';
import { Tag as AntTag } from 'antd';

const Tag = ({ text, styleTag, color, className }) => (
  <span className={styleTag}>
    <AntTag className={className} color={color}>
      {text}
    </AntTag>
  </span>
);

Tag.propTypes = {
  text: PropTypes.string
};

export default Tag;
