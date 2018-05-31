'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _Sider = require('../Sider');

var _Sider2 = _interopRequireDefault(_Sider);

var _Breadcrumbs = require('../../molecules/Breadcrumbs');

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass);
}

var Content = _antd.Layout.Content;

var PageLayout = (function(_React$PureComponent) {
  _inherits(PageLayout, _React$PureComponent);

  function PageLayout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PageLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref = PageLayout.__proto__ || Object.getPrototypeOf(PageLayout)).call.apply(_ref, [this].concat(args))
      )),
      _this)),
      (_this.state = {
        collapsed: false
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }

  _createClass(PageLayout, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          children = _props.children,
          breadcrumbs = _props.breadcrumbs;
        var collapsed = this.state.collapsed;

        return _react2.default.createElement(
          _antd.Layout,
          null,
          _react2.default.createElement(_Sider2.default, { collapsed: collapsed, setCollapsed: this.setCollapsed }),
          _react2.default.createElement(
            Content,
            null,
            _react2.default.createElement(_Breadcrumbs2.default, {
              style: { padding: '1rem', backgroundColor: 'white' },
              navItems: breadcrumbs
            }),
            _react2.default.createElement('div', null, children)
          )
        );
      }
    }
  ]);

  return PageLayout;
})(_react2.default.PureComponent);

exports.default = PageLayout;
