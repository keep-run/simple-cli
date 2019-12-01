import optimist from 'optimist'
import fs from 'fs'
import path from 'path'

const { argv } = optimist
const commands = argv._
const clis = fs.readdirSync(path.resolve(__dirname, 'clis')).map(item => item.replace('.js', ''))
const cmd = clis.indexOf(commands[0]) > -1 ? commands[0] : ''
if (cmd) {
    const command = require(`./clis/${cmd}`).default
    argv.cwd = process.cwd()
    command(argv)
} else {
    console.log('not found')
}