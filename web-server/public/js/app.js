console.log('Client side JS file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('#address')
const result = document.querySelector('#result')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  result.innerHTML = ''

  const address = search.value
  fetch(`/weather?address=${address}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        const para = document.createElement('p')
        para.className = 'error'
        para.textContent = data.error
        return result.appendChild(para)
      }

      for (const item in data) {
        const para = document.createElement('p')
        para.textContent = data[item]
        result.appendChild(para)
      }
    })
  })
})
