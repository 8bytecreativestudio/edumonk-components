'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import styles from './index.scss';

var Inputbox = function Inputbox(_ref) {
  var _onChange = _ref.onChange,
      value = _ref.value;
  return _react2.default.createElement(_input2.default, { onChange: function onChange(event) {
      return _onChange(event.target.value);
    }, value: value });
};

exports.default = Inputbox;