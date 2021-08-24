"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _progressBarWebpackPlugin = _interopRequireDefault(require("progress-bar-webpack-plugin"));

var _cleanWebpackPlugin = require("clean-webpack-plugin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return [new _cleanWebpackPlugin.CleanWebpackPlugin(), // 清空output目录
  new _progressBarWebpackPlugin["default"]() // 输出打包进度信息
  ];
};

exports["default"] = _default;