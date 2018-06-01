'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CardHeading = require('../../atoms/CardHeading');

var _CardHeading2 = _interopRequireDefault(_CardHeading);

var _P = require('../../atoms/P');

var _P2 = _interopRequireDefault(_P);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'card': 'index__card___1wef4',
  'body': 'index__body___uhPdx',
  'cardHeading': 'index__cardHeading___1Qvqo',
  'midContent': 'index__midContent___2klu9',
  'rightContent': 'index__rightContent___1SmXi',
  'self': 'index__self___f1whQ'
};


var ChatHead = function ChatHead(props) {
  var name = props.name,
      message = props.message,
      userCard = props.userCard,
      cardWidth = props.cardWidth,
      onOptionsButtonClick = props.onOptionsButtonClick,
      showOptionsButton = props.showOptionsButton,
      yesButton = props.yesButton,
      noButton = props.noButton,
      showAvatar = props.showAvatar;


  return _react2.default.createElement(
    _antd.Card,
    { className: (0, _classnames2.default)(styles.card, userCard, cardWidth) },
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
          null,
          name
        ),
        _react2.default.createElement(
          _P2.default,
          null,
          message
        ),
        yesButton && _react2.default.createElement(
          'div',
          { style: { color: 'red' } },
          _react2.default.createElement(
            'button',
            null,
            'yes'
          )
        ),
        noButton && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            null,
            'No'
          )
        )
      ),
      showOptionsButton && _react2.default.createElement(
        'div',
        { className: styles.rightContent },
        _react2.default.createElement(_antd.Icon, { type: 'ellipsis', onClick: onOptionsButtonClick })
      )
    )
  );
};

ChatHead.propTypes = {
  name: _propTypes2.default.string,
  message: _propTypes2.default.string.isRequired,
  showAvatar: _propTypes2.default.bool
};

ChatHead.defaultProps = {
  showOptionsButton: true,
  showAvatar: true,
  yesButton: false,
  noButton: false
};

exports.default = ChatHead;