const fetch = require('node-fetch')
const forecastInfo = require('./forecast')

require('dotenv').config()

const API_KEY = process.env.API_KEY

const geoCode = async (address) => {
  return await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${address}&days=1&aqi=no&alerts=no`
  )
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw res.error
      }
      return res
    })
    .then(({ current, location, forecast }) => {
      return {
        address: location.name,
        forecast: forecastInfo({ current, forecast }),
        region: location.region,
        country: location.country,
      }
    })
}

module.exports = geoCode
