'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _avatar = require('antd/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Card = require('../../atoms/Card');

var _Card2 = _interopRequireDefault(_Card);

var _ProfileInfo = require('../../molecules/ProfileInfo');

var _ProfileInfo2 = _interopRequireDefault(_ProfileInfo);

var _GeneralInfo = require('../../molecules/GeneralInfo');

var _GeneralInfo2 = _interopRequireDefault(_GeneralInfo);

var _CardHeading = require('../../atoms/CardHeading');

var _CardHeading2 = _interopRequireDefault(_CardHeading);

var _P = require('../../atoms/P');

var _P2 = _interopRequireDefault(_P);

var _Tag = require('../../atoms/Tag');

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'card': 'index__card___bVdFc',
  'body': 'index__body___2jQ6O',
  'cardHeading': 'index__cardHeading___3lJ1m',
  'midContent': 'index__midContent___lPKu3',
  'rightContent': 'index__rightContent___sEFAC',
  'styleTag': 'index__styleTag___1sqjE',
  'self': 'index__self___3m1kn',
  'greyP': 'index__greyP___3U-3y',
  'infoFooter': 'index__infoFooter___13xnw'
};


var ActivityCard = function ActivityCard(_ref) {
  var children = _ref.children,
      showAvatar = _ref.showAvatar,
      name = _ref.name,
      message = _ref.message,
      userCard = _ref.userCard,
      customCardHeading = _ref.customCardHeading,
      cardWidth = _ref.cardWidth,
      displayTag = _ref.displayTag,
      className = _ref.className,
      status = _ref.status,
      color = _ref.color,
      displayClock = _ref.displayClock,
      timeFont = _ref.timeFont,
      YesNoButton = _ref.YesNoButton,
      infoFooter = _ref.infoFooter,
      infoPara = _ref.infoPara,
      footerTopic = _ref.footerTopic,
      infoParaContent = _ref.infoParaContent,
      info = _ref.info;

  return _react2.default.createElement(
    _Card2.default,
    { card: styles.card, userCard: userCard, cardWidth: cardWidth },
    _react2.default.createElement(
      'div',
      { className: styles.body },
      showAvatar && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_avatar2.default, { icon: 'user' })
      ),
      _react2.default.createElement(
        'div',
        { className: styles.midContent },
        _react2.default.createElement(
          _CardHeading2.default,
          { className: customCardHeading },
          name
        ),
        displayTag && _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(_Tag2.default, { color: color, text: status, className: className })
        ),
        _react2.default.createElement(
          _P2.default,
          { className: (0, _classnames2.default)(styles.greyP, timeFont), displayClock: displayClock },
          message
        ),
        YesNoButton && _react2.default.createElement(
          'div',
          { style: { marginTop: '0.60625rem' } },
          _react2.default.createElement(
            _button2.default,
            { style: { width: '7.5rem', marginRight: '0.6875rem' }, type: 'primary' },
            'YES'
          ),
          _react2.default.createElement(
            _button2.default,
            { style: { backgroundColor: 'red', width: '7.5rem', borderColor: 'red', color: 'white' } },
            'NO'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: styles.rightContent },
        children
      )
    ),
    infoFooter && _react2.default.createElement(
      'div',
      { className: styles.infoFooter },
      _react2.default.createElement(_ProfileInfo2.default, { name: footerTopic, info: info })
    ),
    infoPara && _react2.default.createElement(
      'div',
      { className: styles.infoFooter },
      _react2.default.createElement(_GeneralInfo2.default, { footerTopic: footerTopic, infoParaContent: infoParaContent })
    )
  );
};

ActivityCard.propTypes = {
  name: _propTypes2.default.string,
  message: _propTypes2.default.string.isRequired
};

ActivityCard.defaultProps = {
  showOptionsButton: true,
  showAvatar: true,
  YesNoButton: false,
  infoFooter: false,
  displayTag: false
};

exports.default = ActivityCard;