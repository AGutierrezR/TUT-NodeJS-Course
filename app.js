const chalk = require('chalk')
const getNotes = require('./nodes')
const log = console.log

const command = process.argv[2]

log(process.argv)

if (command === 'add') {
  log('Adding note!')
}

if (command === 'remove') {
  log('Removing note!')
}
