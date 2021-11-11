const express = require('express')

const app = express()

app.get('', (req, res) => {
  res.send('<h1>Hello express!</h1>')
})

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'Andres',
      age: 32,
    },
    {
      name: 'Isabel',
      age: 25,
    },
  ])
})

app.get('/about', (req, res) => {
  res.send('<h1>About page!</h1>')
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is cool!',
    location: 'Valencia',
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
