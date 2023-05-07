const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient('mongodb+srv://shakedbuk:AqWTlymx9DT7ESrD@cluster0.ffork.mongodb.net/?retryWrites=true&w=majority');

const clientPromise = mongoClient.connect();

const handler = async (event,context) => {
    
    try {   
        const database = (await clientPromise).db('cluster1');
        const collection = database.collection('requests');
        const results = await collection.insertOne(
          JSON.parse(event.body)
         )
        return {
            statusCode: 200,
            body: event.body,
        }
    } catch (error) {
        return { statusCode: 500, body: event.body }
    }
}

module.exports = { handler }