const fetch = require('node-fetch')
require('dotenv').config()

const API_KEY = process.env.API_KEY
const geoCode = async (address) => {
  return await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${address}&aqi=no`
  )
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw res.error
      }
      return res
    })
    .then(({ location }) => {
      return {
        name: location.name,
        country: location.country,
        lat: location.lat,
        lon: location.lon,
      }
    })
}

geoCode('Venezuela').then(console.log).catch(console.log)

// fetch(geoCodeURL)
//   .then((res) => res.json())
//   .then((res) => {
//     if (res.error) {
//       throw res.error
//     }
//     return res
//   })
//   .then((body) => console.log(body))
//   .catch((err) => {
//     console.log(err.message)
//   })
