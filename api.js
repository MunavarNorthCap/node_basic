const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const app = express();

// Act like Middleware of connecting Postman to Node(MongoDB)
app.use(express.json());

app.get('/', async (req, resp) => {
    // resp.send({name: 'Malik'});

    let data = await dbConnect();
    data = await data.find().toArray();
    // console.warn(data);    
    resp.send(data);
});

app.post('/', async (req, resp) => {
    // resp.send({ name: 'Munavar'})    // static
    // resp.send(req.body);             // dynamic
    // console.log(req.body);

    let data = await dbConnect();
    let result = await data.insert(req.body);

    resp.send(result);    
});

app.put('/', async (req, resp) => {
    // console.log(req.body);

    let data = await dbConnect();
    let result = await data.updateOne(
        // {name: 'max 1'},
        // {$set: {price: 9000}}
        {name: req.body.name},
        {$set: req.body}
    );

    // resp.send({result: 'update'});
    resp.send(result);
})

// used here params
// app.put("/:name", async (req, resp) => {
//     let data = await dbConnect();
//     let result = await data.updateOne(
//         {name: req.params.name},
//         {$set: req.body}
//     );
//     resp.send(result);
// });

app.delete('/:id', async (req, resp) => {
    // console.log(req.params.id);
    // resp.send('Done');
    const data = await dbConnect();
    const result = await data.deleteOne(
        {_id: new mongodb.ObjectId(req.params.id)})    

    resp.send(result);
})

app.listen(5000);