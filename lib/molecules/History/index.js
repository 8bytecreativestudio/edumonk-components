'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _radio = require('antd/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

var _avatar = require('antd/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('../../atoms/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardHeading = require('../../atoms/CardHeading');

var _CardHeading2 = _interopRequireDefault(_CardHeading);

var _Tag = require('../../atoms/Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _P = require('../../atoms/P');

var _P2 = _interopRequireDefault(_P);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'card': 'index__card___14WxM',
  'body': 'index__body___1-hDn',
  'midContent': 'index__midContent___3K6MT',
  'toInline': 'index__toInline___1f7dl',
  'name': 'index__name___2vyXQ',
  'time': 'index__time___2panV',
  'radioButton': 'index__radioButton___3ML3w',
  'greyP': 'index__greyP___fMgyJ'
};


var History = function History(props) {
  var name = props.name,
      time = props.time,
      message = props.message,
      showTime = props.showTime,
      showRadioButton = props.showRadioButton,
      status = props.status;


  return _react2.default.createElement(
    _Card2.default,
    { card: styles.card },
    _react2.default.createElement(
      'div',
      { className: styles.body },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_avatar2.default, { size: 'small', icon: 'user' })
      ),
      _react2.default.createElement(
        'div',
        { className: styles.midContent },
        _react2.default.createElement(
          'div',
          { className: styles.toInline },
          _react2.default.createElement(
            'div',
            { className: styles.name },
            _react2.default.createElement(
              _CardHeading2.default,
              { className: styles.name },
              name
            )
          ),
          _react2.default.createElement(
            'div',
            { style: { position: 'relative', top: '-0.125rem' } },
            _react2.default.createElement(_Tag2.default, { color: '#ff5b6f', text: status })
          )
        ),
        _react2.default.createElement(
          _P2.default,
          { className: styles.greyP },
          message
        )
      ),
      showRadioButton && _react2.default.createElement(
        'div',
        { className: styles.radioButton },
        _react2.default.createElement(_radio2.default, { checked: true })
      )
    ),
    showTime && _react2.default.createElement(
      'div',
      { className: styles.time },
      _react2.default.createElement(_icon2.default, { type: 'clock-circle-o' }),
      _react2.default.createElement(
        'span',
        { style: { marginLeft: '0.3rem' } },
        time
      )
    )
  );
};

History.defaultProps = {
  showTime: false,
  radioButton: false
};

exports.default = History;