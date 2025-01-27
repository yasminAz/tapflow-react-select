'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('@babel/runtime/helpers/extends');
var React = require('react');
var base_dist_reactSelect = require('../../dist/Select-19facd9e.cjs.dev.js');
var useStateManager = require('../../dist/useStateManager-c14ecffd.cjs.dev.js');
var useCreatable = require('../../dist/useCreatable-f623c501.cjs.dev.js');
require('../../dist/index-0d5b3c94.cjs.dev.js');
require('@emotion/react');
require('@babel/runtime/helpers/taggedTemplateLiteral');
require('@babel/runtime/helpers/objectWithoutProperties');
require('@babel/runtime/helpers/slicedToArray');
require('@babel/runtime/helpers/typeof');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/inherits');
require('@babel/runtime/helpers/defineProperty');
require('react-dom');
require('@babel/runtime/helpers/toConsumableArray');
require('memoize-one');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var _extends__default = /*#__PURE__*/_interopDefault(_extends);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

var CreatableSelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var creatableProps = useStateManager.useStateManager(props);
  var selectProps = useCreatable.useCreatable(creatableProps);
  return /*#__PURE__*/React__namespace.createElement(base_dist_reactSelect.Select, _extends__default['default']({
    ref: ref
  }, selectProps));
});

exports.useCreatable = useCreatable.useCreatable;
exports.default = CreatableSelect;
