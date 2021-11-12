const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoCode = require('./utils/geocode')

const app = express()

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlerbars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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
    title: 'Help',
    message: 'This is a helpful message.',
    name: 'Andres Gutierrez',
  })
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You most provide an address',
    })
  }

  geoCode(req.query.address)
    .then((body) => res.send(body))
    .catch((err) => res.send(err))
})

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You most provide a search term',
    })
  }

  res.send({
    products: [],
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'Not Found',
    name: 'Andres Gutierrez',
    errorMessage: 'Help Article Not Found',
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: 'Not Found',
    name: 'Andres Gutierrez',
    errorMessage: 'Page Not Found!',
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
