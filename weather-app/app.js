const fetch = require('node-fetch')
require('dotenv').config()

const API_KEY = process.env.API_KEY
const geoCodeURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`

fetch(geoCodeURL)
  .then((res) => res.json())
  .then((body) => console.log(body))
