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

import { program } from 'commander'
const pkg = require('../package.json')


// 定义 -v/ --version 指令 
program.version(`当前版本: ${pkg.version}`, '-v, --version', 'get current version')

// 自定义指令 start
program
    .command('start')
    .description('start a program')
    .action(() => {
        //todo
        console.log('command start ')
    })

// 自定义指令 build
program
    .command('build')
    .description('build program')
    .action(() => {
        //todo
        console.log('command build')
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

