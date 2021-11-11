setTimeout(() => {
  console.log('Two seconds are up')
}, 2000)

const names = ['Andres', 'Isa', 'Samuel']
const shortNames = names.filter((name) => {
  return name.length <= 4
})

// Sync
// const geocode = (address, callback) => {
//   const data = {
//     lat: 0,
//     lon: 0,
//   }

//   return data
// }

// const data = geocode('Philadelphia')
// console.log(data) // { lat: 0, lon: 0, }

// Async
const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      lat: 0,
      lon: 0,
    }

    return callback(data)
  }, 2000)
}

const data = geocode('Philadelphia', (data) => {
  console.log(data)
})
