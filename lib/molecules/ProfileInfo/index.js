'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CardHeading = require('../../atoms/CardHeading');

var _CardHeading2 = _interopRequireDefault(_CardHeading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'info': 'index__info___eat4g',
  'hr': 'index__hr___1RE4F',
  'info__name': 'index__info__name___3cdi8',
  'info__content': 'index__info__content___2MIt0',
  'info__content__left': 'index__info__content__left___1Of1E',
  'info__content__right': 'index__info__content__right___2fH5W'
};


var ProfileInfo = function ProfileInfo(_ref) {
  var name = _ref.name,
      info = _ref.info;

  return _react2.default.createElement(
    'div',
    { className: styles.info },
    _react2.default.createElement('div', { className: styles.hr }),
    _react2.default.createElement(
      _CardHeading2.default,
      { className: styles.info__name },
      name
    ),
    _react2.default.createElement(
      'div',
      { className: styles.info__content },
      _react2.default.createElement(
        'div',
        { className: styles.info__content__left },
        Object.keys(info[0]).map(function (val, index) {
          return _react2.default.createElement(
            'p',
            { key: index },
            val
          );
        })
      ),
      _react2.default.createElement(
        'div',
        { className: styles.info__content__right },
        Object.keys(info[0]).map(function (val, index) {
          return _react2.default.createElement(
            'p',
            { key: index },
            info[0][val]
          );
        })
      )
    )
  );
};

exports.default = ProfileInfo;