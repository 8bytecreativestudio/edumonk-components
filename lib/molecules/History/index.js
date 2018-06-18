'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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
  'radioButton': 'index__radioButton___3ML3w'
};


var History = function History(props) {
  var name = props.name,
      time = props.time,
      message = props.message,
      className = props.className,
      midContentClassName = props.midContentClassName,
      completeTag = props.completeTag,
      showTime = props.showTime,
      radioButton = props.radioButton,
      status = props.status;


  return _react2.default.createElement(
    _antd.Card,
    { className: (0, _classnames2.default)(styles.card, className, showTime, radioButton) },
    _react2.default.createElement(
      'div',
      { className: styles.body },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_antd.Avatar, { size: 'small', icon: 'user' })
      ),
      _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(styles.midContent, midContentClassName) },
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
            null,
            _react2.default.createElement(_Tag2.default, { text: status, completeTag: completeTag })
          )
        ),
        _react2.default.createElement(
          _P2.default,
          null,
          message
        )
      ),
      radioButton && _react2.default.createElement(
        'div',
        { className: styles.radioButton },
        _react2.default.createElement(_antd.Radio, { checked: true })
      )
    ),
    showTime && _react2.default.createElement(
      'div',
      { className: styles.time },
      _react2.default.createElement(_antd.Icon, { type: 'clock-circle-o' }),
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