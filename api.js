const express = require('express');
const dbConnect = require('./mongodb');
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
})

app.listen(5000);