const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Andres Gutierrez\n')

fs.appendFileSync('notes.txt', `And I'm a NodeJS Developer`)