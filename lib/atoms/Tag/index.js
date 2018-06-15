'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'tagStyle': 'index__tagStyle___Ptu74'
};


var Tag = function Tag(_ref) {
  var text = _ref.text,
      completeTag = _ref.completeTag;
  return _react2.default.createElement(
    'span',
    { className: (0, _classnames2.default)(styles.tagStyle, completeTag) },
    text
  );
};

Tag.propTypes = {
  text: _propTypes2.default.string
};

exports.default = Tag;