"use strict";

var _commander = require("commander");

// import optimist from 'optimist'
// import fs from 'fs'
// import path from 'path'
// const { argv } = optimist
// const commands = argv._
// const clis = fs.readdirSync(path.resolve(__dirname, 'clis')).map(item => item.replace('.js', ''))
// const cmd = clis.indexOf(commands[0]) > -1 ? commands[0] : ''
// if (cmd) {
//     const command = require(`./clis/${cmd}`).default
//     argv.cwd = process.cwd()
//     command(argv)
// } else {
//     console.log('not found')
// }
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