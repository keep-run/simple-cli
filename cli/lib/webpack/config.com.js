"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsLoader = _interopRequireDefault(require("../babel/jsLoader"));

var _plugin = _interopRequireDefault(require("../babel/plugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var path = require('path');

var _default = function _default(props) {
  var _props$entry = props.entry,
      entry = _props$entry === void 0 ? './index.js' : _props$entry;
  console.log('-----wzc---path--', path.join(process.cwd(), 'dist'));
  return {
    entry: entry,
    output: {
      path: path.join(process.cwd(), 'dist'),
      // 输出路径
      filename: 'bundle.[hash].js'
    },
    stats: "errors-only",
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue']
    },
    module: {
      rules: _toConsumableArray((0, _jsLoader["default"])())
    },
    plugins: _toConsumableArray((0, _plugin["default"])())
  };
};

exports["default"] = _default;