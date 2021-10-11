const validator = require('validator')
const getNotes = require('./nodes')

const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('andres@example.com'))
console.log(validator.isURL('example.com'))
