'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CardUni = require('../../atoms/CardUni');

var _CardUni2 = _interopRequireDefault(_CardUni);

var _CardHeading = require('../../atoms/CardHeading');

var _CardHeading2 = _interopRequireDefault(_CardHeading);

var _P = require('../../atoms/P');

var _P2 = _interopRequireDefault(_P);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'card': 'index__card___3LBp_',
  'body': 'index__body___F0eId',
  'cardHeading': 'index__cardHeading___3IY6A',
  'midContent': 'index__midContent___33eh2',
  'rightContent': 'index__rightContent___1lSfk',
  'self': 'index__self___Vn6G8',
  'greyP': 'index__greyP___2Nfjh'
};


var ChatBox = function ChatBox(_ref) {
  var name = _ref.name,
      message = _ref.message,
      showEllipsis = _ref.showEllipsis,
      onClick = _ref.onClick,
      userCard = _ref.userCard,
      customCardHeading = _ref.customCardHeading,
      cardWidth = _ref.cardWidth,
      showAvatar = _ref.showAvatar;

  return _react2.default.createElement(
    _CardUni2.default,
    { card: styles.card, userCard: userCard, cardWidth: cardWidth },
    _react2.default.createElement(
      'div',
      { className: styles.body },
      showAvatar && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_antd.Avatar, { icon: 'user' })
      ),
      _react2.default.createElement(
        'div',
        { className: styles.midContent },
        _react2.default.createElement(
          _CardHeading2.default,
          { className: customCardHeading },
          name
        ),
        _react2.default.createElement(
          _P2.default,
          null,
          message
        )
      ),
      showEllipsis && _react2.default.createElement(
        'div',
        { className: styles.rightContent },
        _react2.default.createElement(_antd.Icon, { type: 'ellipsis', onClick: onClick })
      )
    )
  );
};

ChatBox.propTypes = {
  name: _propTypes2.default.string,
  message: _propTypes2.default.string.isRequired,
  showAvatar: _propTypes2.default.bool,
  showEllipsis: _propTypes2.default.bool,
  onClick: _propTypes2.default.bool,
  cardWidth: _propTypes2.default.string,
  customCardHeading: _propTypes2.default.string,
  userCard: _propTypes2.default.string
};

ChatBox.defaultProps = {
  showOptionsButton: true,
  showAvatar: true,
  showEllipsis: false
};

exports.default = ChatBox;