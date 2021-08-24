"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _webpack = _interopRequireDefault(require("webpack"));

var _configProd = _interopRequireDefault(require("../webpack/config.prod.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(pkg) {
  var compiler = (0, _webpack["default"])((0, _configProd["default"])(pkg));
  compiler.run(function (err, status) {
    // console.log(status)
    if (err) {
      console.log('build err -------------   XXXXXXXXXXXXXXXXXXX -----------err');
      console.log(err);
      process.exit(1);
    }
  });
};

exports["default"] = _default;