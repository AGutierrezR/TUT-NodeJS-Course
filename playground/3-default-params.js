const greater = (name = 'user', age) => {
  console.log(`Hello ${name}`)
}

greater('Andres') // Hello Andres

greater() // Hello user

// Defoult params for objects
const transaction = (type, { label, stock } = {}) => {
  console.log(type, label, stock)
}

transaction('order') // order undefined undefined

const transaction2 = (type, { label = 'label', stock = 'some' } = {}) => {
  console.log(type, label, stock)
}

const product = { stock: 'some stock' }

transaction2('order', product) // order label some stock
