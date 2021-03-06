const dbConnect = require('./mongodb'); 

// Promise Method
// dbConnect().then((resp) => {
//     // console.log(resp.find().toArray());	

//     resp.find().toArray().then((data) => {	// Here toArray() acts as promise
//         console.warn(data)
//     });

//     // resp.find({name: 'A 50'}).toArray().then((data) => {
//     //     console.warn(data)
//     // });
// });

// async await
const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();

// module.exports = main;
