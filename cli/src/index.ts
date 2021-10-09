
import { program } from 'commander'
import start from './commanders/start.js'
import build from './commanders/build'
import init from './commanders/init'
import { IConfig } from './types/index'
const fs = require('fs')
const pkg = require('../package.json')
const cwd = process.cwd()

let config: IConfig = {
    port: 9001,   //不要默认值为8000  端口可能被占用
    entry: './index.js',
    cwd: process.cwd(),
}

const userPkgPath = `${cwd}/package.json`   //使用者目录下的package.json文件路径

if (fs.existsSync(userPkgPath)) {
    let userConfig = require(userPkgPath).simple_cli || {}
    config = Object.assign(config, userConfig)
}

// 定义 - v / --version 指令
program.version(`当前版本: ${pkg.version}`, '-v, --version', 'get current version')

// 自定义指令 init
program
    .command('init')
    .description('init a program')
    .option('-r, --react', 'init a react program ')
    .action((args) => {
        init({ ...config, ...args })
    })


// 自定义指令 start
program
    .command('start')
    .description('start a program')
    .action(() => {
        start(config)
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
