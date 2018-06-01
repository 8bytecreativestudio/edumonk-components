'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _breadcrumb = require('antd/lib/breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumbs = function Breadcrumbs(_ref) {
  var style = _ref.style,
      navItems = _ref.navItems;
  return _react2.default.createElement(
    _breadcrumb2.default,
    { style: style },
    navItems.map(function (_ref2, counter) {
      var to = _ref2.to,
          label = _ref2.label;
      return _react2.default.createElement(
        _breadcrumb2.default.Item,
        { key: counter },
        to ? _react2.default.createElement(
          _reactRouterDom.Link,
          { to: to },
          label
        ) : label
      );
    })
  );
};

Breadcrumbs.defaultProps = {
  navItems: []
};

exports.default = Breadcrumbs;