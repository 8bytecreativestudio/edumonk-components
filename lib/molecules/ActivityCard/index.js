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

var _CardUni = require('../../../common/atoms/CardUni');

var _CardUni2 = _interopRequireDefault(_CardUni);

var _ProfileInfo = require('../../molecules/ProfileInfo');

var _ProfileInfo2 = _interopRequireDefault(_ProfileInfo);

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
  'self': 'index__self___3m1kn',
  'greyP': 'index__greyP___3U-3y'
};


var ActivityCard = function ActivityCard(_ref) {
  var children = _ref.children,
      name = _ref.name,
      message = _ref.message,
      userCard = _ref.userCard,
      customCardHeading = _ref.customCardHeading,
      cardWidth = _ref.cardWidth,
      displayTag = _ref.displayTag,
      status = _ref.status,
      styleTag = _ref.styleTag,
      color = _ref.color,
      displayClock = _ref.displayClock,
      timeFont = _ref.timeFont,
      YesNoButton = _ref.YesNoButton,
      infoFooter = _ref.infoFooter,
      info = _ref.info;

  return _react2.default.createElement(
    _CardUni2.default,
    { card: styles.card, userCard: userCard, cardWidth: cardWidth },
    _react2.default.createElement(
      'div',
      { className: styles.body },
      _react2.default.createElement(
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
        displayTag && _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(_Tag2.default, { color: color, text: status, styleTag: styleTag })
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
            _antd.Button,
            { style: { width: '7.5rem', marginRight: '0.6875rem' }, type: 'primary' },
            'YES'
          ),
          _react2.default.createElement(
            _antd.Button,
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
      null,
      _react2.default.createElement(_ProfileInfo2.default, { name: 'Activities Details', info: info })
    )
  );
};

ActivityCard.propTypes = {
  name: _propTypes2.default.string,
  message: _propTypes2.default.string.isRequired
};

ActivityCard.defaultProps = {
  showOptionsButton: true,
  YesNoButton: false,
  infoFooter: false,
  displayTag: false
};

exports.default = ActivityCard;