'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = require('antd/lib/card');

var _card2 = _interopRequireDefault(_card);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(_ref) {
  var children = _ref.children,
      card = _ref.card,
      userCard = _ref.userCard,
      cardWidth = _ref.cardWidth;

  return _react2.default.createElement(
    _card2.default,
    { className: (0, _classnames2.default)(card, userCard, cardWidth) },
    _react2.default.createElement(
      'div',
      null,
      children
    )
  );
};

exports.default = Card;