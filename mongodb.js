const { MongoClient }  = require('mongodb');

// Connection URL
const url = "mongodb://0.0.0.0:27017";
const client = new MongoClient(url);

// DataBase Name
const database = 'eComDB';

async function dbConnect() {
    let result = await client.connect();
    db = result.db(database);
    collection = db.collection('products');
    return collection;
}

module.exports = dbConnect; 
