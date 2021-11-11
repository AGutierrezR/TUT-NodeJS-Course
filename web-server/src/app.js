const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlerbars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Andres Gutierrez',
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Andres Gutierrez',
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    message: 'This is a helpful message.',
  })
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
