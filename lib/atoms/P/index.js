'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'one': 'index__one___14Xeu'
};


var P = function P(_ref) {
  var children = _ref.children,
      standard = _ref.standard,
      className = _ref.className,
      displayClock = _ref.displayClock;
  return _react2.default.createElement(
    'p',
    { className: (0, _classnames2.default)(styles.one, standard, className) },
    displayClock && _react2.default.createElement(
      'span',
      { style: { display: 'inline', paddingRight: '0.3rem' } },
      _react2.default.createElement(_icon2.default, { type: 'clock-circle-o' })
    ),
    children
  );
};
P.propTypes = {
  standard: _propTypes2.default.string,
  className: _propTypes2.default.string,
  displayClock: _propTypes2.default.bool
};

P.defaultProps = {
  displayClock: false
};
exports.default = P;