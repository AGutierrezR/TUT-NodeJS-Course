const fs = require('fs')
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
    log('New note added!')
  } else {
    log('Note title taken!')
  }
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

module.exports = { getNotes, addNote }
