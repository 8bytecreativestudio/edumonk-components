'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CardHeading = require('../../atoms/CardHeading');

var _CardHeading2 = _interopRequireDefault(_CardHeading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'content': 'index__content___D2p1i',
  'hr': 'index__hr___KHY7U',
  'text': 'index__text___1BEua',
  'content__name': 'index__content__name___2kqej',
  'content__notice': 'index__content__notice___3E62a'
};


var GeneralInfo = function GeneralInfo(_ref) {
  var footerTopic = _ref.footerTopic,
      infoParaContent = _ref.infoParaContent,
      className = _ref.className;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(styles.content, className) },
    _react2.default.createElement('div', { className: styles.hr }),
    _react2.default.createElement(
      'div',
      { className: styles.text },
      _react2.default.createElement(
        _CardHeading2.default,
        { className: styles.content__name },
        footerTopic
      ),
      _react2.default.createElement(
        'div',
        { className: styles.content__notice },
        infoParaContent
      )
    )
  );
};

exports.default = GeneralInfo;