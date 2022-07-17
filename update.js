const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();
    // console.warn(data); // namespace: MongoDBNamespace { db: 'eComDB', collection: 'products' },

    let result = await data.updateOne(
        {name: 'note 5'}, { $set: {name : 'max pro 2', price: 5100}}
    );
    console.warn(result);
}

updateData(); 
