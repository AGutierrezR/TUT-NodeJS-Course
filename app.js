const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./nodes')
const log = console.log

// Customize yargs version
yargs.version('1.1.0')

// add, remove, read, list

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Node body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: ({ title, body }) => {
    log({ title, body })
  },
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => {
    log('Removing a note!')
  },
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => {
    log('Reading a note!')
  },
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: () => {
    log('Listing out all notes!')
  },
})

yargs.parse()
