const { MongoClient, ObjectId } = require('mongodb')

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

    // db.collection('users')
    //   .findOne({ _id: ObjectId('618ee9195eee08b8fdc81ceb') })
    //   .then((result, error) => {
    //     if (error) {
    //       return 'Unable to fetch'
    //     }
    //     console.log(result)
    //   })

    // db.collection('users').find({ age: 25 }).toArray((error, users) => {
    //   console.log(users)
    // })

    // db.collection('users').find({ age: 25 }).count((error, count) => {
    //   console.log(count)
    // })

    db.collection('tasks').findOne(
      { _id: ObjectId('618eecd8eeaa1db7ff5efdee') },
      (error, result) => {
        console.log(result)
      }
    )

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks)
      })
  }
)
