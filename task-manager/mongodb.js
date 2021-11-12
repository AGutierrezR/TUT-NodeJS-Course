const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient // For connection use

// Server configuration
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

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

    // Inserting data
    db.collection('users').insertOne({
      name: 'Andres',
      age: 32,
    })
  }
)
