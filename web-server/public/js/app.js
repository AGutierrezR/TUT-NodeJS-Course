console.log('Client side JS file is loaded')

fetch('http://localhost:3000/weather?address=london').then((response) => {
  response.json().then((data) => {
    if (data.error) {
      return console.error(data.error)
    }

    console.log(data)
  })
})
