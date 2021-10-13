const fs = require('fs')
const chalk = require('chalk')
const log = console.log

const getNotes = () => {
  return 'This is a note from notes.js'
}

const addNote = (title, body) => {
  const notes = loadNotes()

  const isNoteDuplicate = notes.some((note) => note.title === title)

  if (!isNoteDuplicate) {
    notes.push({
      title,
      body,
    })
    saveNotes(notes)
    log(chalk.green.inverse('New note added!'))
  } else {
    log(chalk.red.inverse('Note title taken!'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()

  const filteredNotes = notes.filter((note) => note.title !== title)
  console.log(filteredNotes)
  if (notes.length > filteredNotes.length) {
    saveNotes(filteredNotes)
    log(chalk.green.inverse('Note removed!'))
  } else {
    log(chalk.red.inverse('Note does not exists!'))
  }
}

const listNotes = () => {
  const notes = loadNotes()

  log(chalk.inverse('Your Notes'))

  notes.forEach((note) => {
    log(note.title)
  })
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (error) {
    return []
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

module.exports = { getNotes, addNote, removeNote, listNotes }
