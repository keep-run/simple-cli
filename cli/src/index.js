
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

