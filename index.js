const express = require('express');
const app = express();
const conn = require('./config');

app.use(express.json());

app.get('/', (req, resp) => {
    conn.query('select * from users', (err, result) => {
        if(err) {
            resp.send('error')
        } else {
            resp.send(result);
        }
    })
});

app.post('/', (req, resp) => {
    // const data = {
    //     name: "Sheik",
    //     password: "4646",
    //     user_type: "visitor"
    // }

    const data = req.body;

    conn.query('INSERT INTO users SET ?', data, (error, result, fields) => {
        if(error) throw error;
        resp.send(result);
    })
});

app.put('/:id', (req, resp) => {
    const data = [ req.body.name, 
            req.body.password, 
            req.body.user_type, 
            req.params.id ];

    conn.query('UPDATE users SET name = ?, password = ?, user_type = ? WHERE id = ?',
        data, (err, result, fields) => {
            if(err) throw error;
            resp.send(result);
    })
});

app.delete('/:id', (req, resp) => {
    // resp.send(req.params.id)

    conn.query('DELETE FROM users WHERE id ='+ req.params.id, (err, result) => {
        if(err) throw error;
        resp.send(result);
    });    
});

app.listen(5000);