const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect')
    }
    const db = client.db(databaseName)

    db.collection('users').updateOne({
        _id: new ObjectID("5f771ea7a2af00912c03eb76")
    }, {
        $set: { name: 'Mike' }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    /*     db.collection('tasks').insertMany([
            {
                description: 'Complete challenge of insert 3 tasks on mongodb',
                completed: true
            }, {
                description: 'Study abut database',
                completed: false
            }, {
                description: 'Do a game using sockets between client/server',
                completed: false
            }
        ], (error, result) => {
            if (error) {
                return console.log(error)
            }
            console.log(result.ops)
        })  */
}) 