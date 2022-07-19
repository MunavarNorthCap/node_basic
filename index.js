const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/eComDB");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String 
});

const saveInDB = async () => {    
    const ProductModel = mongoose.model('products', ProductSchema);

    let data = new ProductModel({
        name: 'Note Pro', 
        price: 17800, 
        brand: 'Mi', 
        category: 'Mobile'
    });
    let result = await data.save();
    console.log(result);  
}
// saveInDB();

const updateInDB = async () => {
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = await ProductModel.updateOne(
        {name: "Pro 7"},
        {$set: {name: 'Pro 8', price: 6000}}
    );
    console.log(data);
    // {
    //     acknowledged: true,
    //     modifiedCount: 1,
    //     upsertedId: null,
    //     upsertedCount: 0,
    //     matchedCount: 1
    // }
};
// updateInDB();

const deleteInDB = async () => {
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = await ProductModel.deleteOne({name: 'Pro 8'});
    console.log(data);  // { acknowledged: true, deletedCount: 1 }
};
// deleteInDB();

const findInDB = async () => {
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = await ProductModel.find({name: 'A 50'});
    console.log(data);
    // [
    //     {
    //       _id: new ObjectId("62d227967749213e3cab257f"),
    //       name: 'A 50',
    //       brand: 'Samsung',
    //       price: 16000,
    //       category: 'Mobile'
    //     }
    // ]
};
findInDB();
