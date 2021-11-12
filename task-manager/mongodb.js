const { MongoClient, ObjectId } = require('mongodb')

// Server configuration
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id.toString())
console.log(id.getTimestamp())

// Making the connection
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!')
    }

    // Selecting database
    const db = client.db(databaseName)

    // // Inserting data
    // db.collection('users').insertOne(
    //   {
    //     name: 'Andres',
    //     age: 32,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user')
    //     }

    //     console.log(result)
    //   }
    // )

    // // Promise Way
    // db.collection('users')
    //   .insertOne({
    //     name: 'Andres',
    //     age: 32,
    //   })
    //   .then((result, error) => {
    //     if (error) {
    //       return console.log('Unable to insert user')
    //     }

    //     console.log(result)
    //   })

    // Inserting multiple documents
    // db.collection('tasks')
    //   .insertMany([
    //     {
    //       description: 'Description 1',
    //       completed: true,
    //     },
    //     {
    //       description: 'Description 2',
    //       completed: false,
    //     },
    //     {
    //       description: 'Description 3',
    //       completed: true,
    //     },
    //   ])
    //   .then((result, error) => {
    //     if (error) {
    //       return console.log('Unable to insert tasks')
    //     }

    //     console.log(result)
    //   })
  }
)
