'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var styles = {
  cardHeading: 'index__cardHeading___SZ_nn'
};

exports.default = function(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return _react2.default.createElement(
    'p',
    { className: (0, _classnames2.default)(styles.cardHeading, className) },
    children
  );
};
