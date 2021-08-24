
import { program } from 'commander'
import start from './commanders/start.js'
import build from './commanders/build'


const fs = require('fs')
const pkg = require('../package.json')

const cwd = process.cwd()
let config = {
    port: 8000,
    entry: './index.js',
    cwd: process.cwd()
}

const userPkgPath = `${cwd}/package.json`   //使用者目录下的package.json文件路径

if (fs.existsSync(userPkgPath)) {
    let userConfig = require(userPkgPath).simple_cli || {}
    config = Object.assign(config, userConfig)
}

// 定义 - v / --version 指令
program.version(`当前版本: ${pkg.version}`, '-v, --version', 'get current version')


// 自定义指令 start
program
    .command('start')
    .description('start a program')
    .action(() => {
        //todo
        // start(config)
        console.log('command start ')
    })

// 自定义指令 build
program
    .command('build')
    .description('build program')
    .action(() => {
        build(config)
    })

// 自定义指令 publish
program
    .command('publish')
    .description('publish program')
    .action(() => {
        //todo
        console.log('command publish')
    })

program.parse(process.argv)
