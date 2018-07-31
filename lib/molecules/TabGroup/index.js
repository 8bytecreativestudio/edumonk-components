'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'first': 'index__first___mXt6S'
};


var TabGroup = function TabGroup(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    { className: styles.first },
    children
  );
};

exports.default = TabGroup;