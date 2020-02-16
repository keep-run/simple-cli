"use strict";

var _optimist = _interopRequireDefault(require("optimist"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var argv = _optimist["default"].argv;
var commands = argv._;

var clis = _fs["default"].readdirSync(_path["default"].resolve(__dirname, 'clis')).map(function (item) {
  return item.replace('.js', '');
});

var cmd = clis.indexOf(commands[0]) > -1 ? commands[0] : '';

if (cmd) {
  var command = require("./clis/".concat(cmd))["default"];

  argv.cwd = process.cwd();
  command(argv);
} else {
  console.log('not found');
}