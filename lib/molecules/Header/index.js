'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var styles = {
  header: 'index__header___10GSN',
  header_name: 'index__header_name___3NMum'
};

exports.default = function() {
  return _react2.default.createElement(
    'div',
    { className: styles.header },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_antd.Icon, { type: 'menu-fold', style: { fontSize: 25, color: 'grey' } })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_antd.Avatar, { icon: 'user' }),
      _react2.default.createElement('span', { className: styles.header_name }, ' Kabir Pokharel')
    )
  );
};
