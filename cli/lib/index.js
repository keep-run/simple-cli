"use strict";

var _commander = require("commander");

var _start = _interopRequireDefault(require("./commanders/start.js"));

var _build = _interopRequireDefault(require("./commanders/build"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fs = require('fs');

var pkg = require('../package.json');

var cwd = process.cwd();
var config = {
  port: 8000,
  entry: './index.js',
  cwd: process.cwd()
};
var userPkgPath = "".concat(cwd, "/package.json"); //使用者目录下的package.json文件路径

if (fs.existsSync(userPkgPath)) {
  var userConfig = require(userPkgPath).simple_cli || {};
  config = Object.assign(config, userConfig);
} // 定义 - v / --version 指令


_commander.program.version("\u5F53\u524D\u7248\u672C: ".concat(pkg.version), '-v, --version', 'get current version'); // 自定义指令 start


_commander.program.command('start').description('start a program').action(function () {
  //todo
  // start(config)
  console.log('command start ');
}); // 自定义指令 build


_commander.program.command('build').description('build program').action(function () {
  (0, _build["default"])(config);
}); // 自定义指令 publish


_commander.program.command('publish').description('publish program').action(function () {
  //todo
  console.log('command publish');
});

_commander.program.parse(process.argv);