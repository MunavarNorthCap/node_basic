const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/eComDB");

    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number
    });
                                    //  collectionName, SchemeName
    const ProductModel = mongoose.model('products', ProductSchema);

    let data = new ProductModel({name: 'M8', price: 7800});
    let result = await data.save();
    console.log(result);    
    // { name: 'M8', _id: new ObjectId("62d68b1e14a1270dc231e8c1"), __v: 0 }

    // {
    //     name: 'M8',
    //     price: 7800,
    //     _id: new ObjectId("62d68b9c4484683a3436e385"),
    //     __v: 0
    // }
}

main();