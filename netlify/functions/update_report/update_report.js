const { MongoClient, ObjectId } = require("mongodb");

const mongoClient = new MongoClient('mongodb+srv://shakedbuk:AqWTlymx9DT7ESrD@cluster0.ffork.mongodb.net/?retryWrites=true&w=majority');

const clientPromise = mongoClient.connect();

const handler = async (event,context) => {
    if(!Object.keys(context.clientContext).length){
        return {statusCode: 401,body: "unauthorized"}
    }
    try {
        const database = (await clientPromise).db('cluster1');
        const collection = database.collection('requests');
        const parsedObject = JSON.parse(event.body)
        const data = {...parsedObject['object']}
        delete data['_id']
        const results = await collection.updateOne(
          {'_id': ObjectId(parsedObject['_id'])},{$set:data}
         )
         console.log(results)
        return {
            statusCode: 200,
            body: event.body,
        }
    } catch (error) {
        return { statusCode: 500, body: error.message }
    }
}

module.exports = { handler }