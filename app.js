const chalk = require('chalk')
const getNotes = require('./nodes')
const log = console.log

const msg = getNotes()
log(msg)

log(chalk.green(msg))
