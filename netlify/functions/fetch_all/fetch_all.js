const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient('mongodb+srv://shakedbuk:AqWTlymx9DT7ESrD@cluster0.ffork.mongodb.net/?retryWrites=true&w=majority');

const clientPromise = mongoClient.connect();

const handler = async (event,context) => {
    if(!Object.keys(context.clientContext).length){
        return {statusCode: 401,body: "unauthorized"}
    }
    try {
        const database = (await clientPromise).db('cluster1');
        const collection = database.collection('requests');
        const results = await collection.find({}).toArray();
        return {
            statusCode: 200,
            body: JSON.stringify(results),
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }