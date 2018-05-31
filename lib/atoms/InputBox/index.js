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
  input: 'index__input___2r4MW'
};

var Inputbox = function Inputbox(_ref) {
  var _onChange = _ref.onChange,
    value = _ref.value;
  return _react2.default.createElement(_antd.Input, {
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    value: value
  });
};

exports.default = Inputbox;
