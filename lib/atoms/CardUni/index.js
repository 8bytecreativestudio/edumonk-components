'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardUni = function CardUni(_ref) {
  var children = _ref.children,
      card = _ref.card,
      userCard = _ref.userCard,
      cardWidth = _ref.cardWidth,
      apple = _ref.apple;

  return _react2.default.createElement(
    _antd.Card,
    { className: (0, _classnames2.default)(card, userCard, cardWidth, apple) },
    _react2.default.createElement(
      'div',
      null,
      children
    )
  );
};

exports.default = CardUni;