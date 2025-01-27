"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _extends = require("@babel/runtime/helpers/extends"), React = require("react"), base_dist_reactSelect = require("../../dist/Select-d316d9a8.cjs.prod.js"), useStateManager = require("../../dist/useStateManager-e6bc29cf.cjs.prod.js"), useAsync = require("../../dist/useAsync-51cb8307.cjs.prod.js");

function _interopDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  return e && Object.keys(e).forEach((function(k) {
    if ("default" !== k) {
      var d = Object.getOwnPropertyDescriptor(e, k);
      Object.defineProperty(n, k, d.get ? d : {
        enumerable: !0,
        get: function() {
          return e[k];
        }
      });
    }
  })), n.default = e, Object.freeze(n);
}

require("../../dist/index-3bd648d9.cjs.prod.js"), require("@emotion/react"), require("@babel/runtime/helpers/taggedTemplateLiteral"), 
require("@babel/runtime/helpers/objectWithoutProperties"), require("@babel/runtime/helpers/slicedToArray"), 
require("@babel/runtime/helpers/typeof"), require("@babel/runtime/helpers/classCallCheck"), 
require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/inherits"), 
require("@babel/runtime/helpers/defineProperty"), require("react-dom"), require("@babel/runtime/helpers/toConsumableArray"), 
require("memoize-one");

var _extends__default = _interopDefault(_extends), React__namespace = _interopNamespace(React), AsyncSelect = React.forwardRef((function(props, ref) {
  var stateManagedProps = useAsync.useAsync(props), selectProps = useStateManager.useStateManager(stateManagedProps);
  return React__namespace.createElement(base_dist_reactSelect.Select, _extends__default.default({
    ref: ref
  }, selectProps));
}));

exports.useAsync = useAsync.useAsync, exports.default = AsyncSelect;
