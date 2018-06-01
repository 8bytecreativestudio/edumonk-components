'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'conversation': 'index__conversation___3SdtN',
  'alignItems': 'index__alignItems___2fmGG'
};


var PageTitle = function PageTitle(props) {
  var text = props.text,
      showButton = props.showButton,
      showIcon = props.showIcon;

  return _react2.default.createElement(
    'div',
    { className: styles.conversation },
    _react2.default.createElement(
      'div',
      { className: styles.alignItems },
      showIcon && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_antd.Icon, { type: 'profile', style: { fontSize: 19, color: 'grey' } })
      ),
      _react2.default.createElement(
        'div',
        { style: { color: 'rgb(139, 138, 138)', marginLeft: '10px' } },
        text
      )
    ),
    showButton && _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _antd.Button,
        { type: 'primary' },
        'Start Conversation'
      )
    )
  );
};

PageTitle.defaultProps = {
  showIcon: false,
  showButton: false
};

exports.default = PageTitle;