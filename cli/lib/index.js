"use strict";

var _commander = require("commander");

var pkg = require('../package.json'); // 定义 -v/ --version 指令 


_commander.program.version("\u5F53\u524D\u7248\u672C: ".concat(pkg.version), '-v, --version', 'get current version'); // 自定义指令 start


_commander.program.command('start').description('start a program').action(function () {
  //todo
  console.log('command start ');
}); // 自定义指令 build


_commander.program.command('build').description('build program').action(function () {
  //todo
  console.log('command build');
}); // 自定义指令 publish


_commander.program.command('publish').description('publish program').action(function () {
  //todo
  console.log('command publish');
});

_commander.program.parse(process.argv);