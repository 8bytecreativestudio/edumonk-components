'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = function Tag(_ref) {
  var text = _ref.text,
      styleTag = _ref.styleTag,
      color = _ref.color;
  return _react2.default.createElement(
    'span',
    { className: styleTag },
    _react2.default.createElement(
      _antd.Tag,
      { color: color },
      text
    )
  );
};

Tag.propTypes = {
  text: _propTypes2.default.string
};

exports.default = Tag;