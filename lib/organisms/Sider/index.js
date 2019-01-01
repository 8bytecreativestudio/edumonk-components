'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('react-router-dom/Link');

var _Link2 = _interopRequireDefault(_Link);

var _logo = require('./logo.svg');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'logo': 'index__logo___17LpP',
  'sider': 'index__sider___3lBZh',
  'nav-link': 'index__nav-link___1mJEP',
  'active': 'index__active___2KRnO'
};
var Sider = _layout2.default.Sider;

var CustomSider = function (_React$PureComponent) {
  _inherits(CustomSider, _React$PureComponent);

  function CustomSider() {
    _classCallCheck(this, CustomSider);

    return _possibleConstructorReturn(this, (CustomSider.__proto__ || Object.getPrototypeOf(CustomSider)).apply(this, arguments));
  }

  _createClass(CustomSider, [{
    key: 'render',
    value: function render() {
      var collapsed = this.props.collapsed;


      return _react2.default.createElement(
        Sider,
        {
          trigger: null,
          collapsible: true,
          style: { padding: '16px 0', width: '100%' },
          collapsed: collapsed,
          breakpoint: 'md',
          onCollapse: this.onCollapse,
          width: 256,
          className: styles.sider
        },
        _react2.default.createElement(
          'div',
          { className: styles.logo },
          _react2.default.createElement(
            _Link2.default,
            { to: '/' },
            _react2.default.createElement('img', { src: _logo2.default, alt: 'logo' }),
            _react2.default.createElement(
              'h1',
              null,
              'EduMonk Pro+'
            )
          )
        )
      );
    }
  }]);

  return CustomSider;
}(_react2.default.PureComponent);

exports.default = CustomSider;