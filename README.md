Node is a Server Environment.
------------------------------
1. Download Node js
2. Install NPM and Node
3. List of Recommender code editor - sublime, atom, WebStorm, vs code etc...
---------------------------------------------------------------------
NPM - Node Package Manager

npm -v && node -v / version checking
-------------------------------------
cmd > node
console.log("Like");
Like
undefined ---> its not error 

Reason: its just printing the value & there is no return value 
----------------------------------------------------------------
Eg 2.
var x = 10;
console.log(x);
10
undefined

var y = 20;
console.warn(x+y);
30
undefined
--------------------
terminal >
  node index.js || node .\index.js
------------------------------------
= assign value
== compare value
=== includes data type to check it 
-----------------------------------
Eg.1
var x = '20';
if(x === 20) console.log("Match");
// No result

Eg.2
var x = 20;
if(x === 20) { console.log("Match"); }
// Match

Eg.3
var x = '20';
for(i=0; i<10; i++) {
    console.log(i);
}
// 0 to 9 it will print

Eg.4
const arr = [2, 4, 6, 8];
console.log(arr[0]);
// 2
----------------------------------------
Eg:  app.js >
module.exports = {
    x: 10,
    y: 20,
    z: function() {
        return 30;
    }
}

index.js >
const app = require('./app');

console.log(app);  	// { x: 10, y: 20 }
console.log(app.x);	// 10
console.log(app.z());	// 30

const arr = [2, 4, 7, 1, 3, 8, 3];
// filter 
let result = arr.filter((item) => {
    // return item === 3;   // [ 3, 3 ]
    // return item > 4;     // [7, 8]
    return item >= 4;       // [ 4, 7, 8 ]
});
console.log(result);
---------------------------------------------
Eg: file System - NonGlobal Module
const fs = require('fs');

fs.writeFileSync("hello.txt", "Need import for fs module");

O/p: hello.txt file created
------------------------------
Alternate:-
const fs = require('fs').writeFileSync;
fs("code.txt", "some text");

o/p: code.txt -> some text
---------------------------------------------------------------

console.log("path", __dirname); 
// path E:\node_crash

console.log("path -->", __filename);
// path --> E:\node_crash\index.js

--------------------------------------
Eg: http
const http = require('http');

const dataControl = (req, resp) =>{
    resp.write("<h1>Hello, This is Munavar</h1>");
    resp.end();
}
http.createServer(dataControl).listen(4500);

------ Alternate way to write the code: ------
// function as parameter Example

http.createServer((req, resp) =>{
    resp.write("<h1>Hello, This is Munavar</h1>");
    resp.end();
}).listen(4500);

----------------------------
package.json >
1. npm init
> name:
> version:
> description:
> repo:  git ? how to add it
> keywords: not mandatory
> author: Munavar
> license: "ISC" ....
-----------------------------
package.json >

"dependencies": {
    "colors": "^1.4.0",
    "simple-node-logger": "^21.8.12"
  }

// Note: dependencies package 
npm install colors
npm i simple-node-logger
---------------------------------------
Eg: https://www.npmjs.com/package/colors

var colors = require("colors");
console.log('Munavar'.green);
// Munavar (in green color)

console.log('Munavar'.bgBlue);
-----------------------------
** Node is Single thread 
1 time run 1 time to execute
------------------------------
# https://www.npmjs.com/package/chalk

?

----------------------------------------
.gitignore [ one file created for ignoring ]

/node_modules
----------------
# Nodemon
https://www.npmjs.com/package/nodemon

npm i nodemon -g  [ for global install ]

Q) If Nodemon is not working?
A) open powershell(right click) - run adminstration
-> type : Set-ExecutionPolicy Unrestricted
	PS C:\WINDOWS\system32> Set-ExecutionPolicy Unrestricted
-> Y (enter)
-------------------------------------------------------------------
Open terminal to run Nodemon
> nodemon .\index.js

-----------------------
# Interview Question:

-> Node js is async language
1. Run First Script
2. Run Second Script(complex data)
	-- it will not wait to finish 2nd Script --
3. Run Third
4. continue...
---------------------------
# Status Code: 
200 - Ok
201 - created
404 - Not Found
500 - Internal Server Error
-----------------------------
Eg:
index.js >

const http = require('http');
const data = require('./data');

http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type': 'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5500);

data.js >
const data = [
    { name: 'Munavar', email: 'munavar@gmail.com', contact: '9700574646' },
    { name: 'Malik', email: 'malik@gmail.com' },
    { name: 'Sheik', email: 'sheik@gmail.com' }
]

module.exports = data;
--------------------------------
console.log(process.argv);

PS E:\node_crash> node index.js 100
[
  'C:\\Program Files\\nodejs\\node.exe',
  'E:\\node_crash\\index.js',
  '100'
]

Eg.2
console.log(process.argv[2]);

PS E:\node_crash> node index.js Hello 100
Hello
-----------------------------------------
Eg: node index.js newFile.txt 'inside the file this text come'
const fs = require('fs');

const input = process.argv;

fs.writeFileSync(input[2], input[3]);
--------------------------------------
Eg.2 add/remove from fs
const fs = require('fs');

const input = process.argv;

if(input[2] == 'add') {
    fs.writeFileSync(input[3], input[4])
} else if (input[2] == 'remove') {
    fs.unlinkSync(input[3])
} else {
    console.log('invalid input');
}

terminal: 
1. node index.js add secondParameter.txt 'text content'
2. node index.js remove secondParameter.txt
--------------------------------------------------------
// Note here we are already created folder in dir with name "files"

const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files');  // here files is folderName
// console.log(dirPath);   // E:\node_crash\files

for(i = 0; i < 5; i++) {
    fs.writeFileSync(dirPath+"/hello"+i+".txt", "content of file text");
    // fs.writeFileSync(dirPath+`/hello${i}.txt`, "content of file text");
}

fs.readdir(dirPath, (err, files) => {
    // here is files what we want to get it
    // console.log(files); // [ Arr of files list appeared ]
    files.forEach(item => {
        console.log("file name is : "+ item);  
	 // file name is : hello0.txt etc...
    })
});

O/P: 1
[
  'hello0.txt',
  'hello1.txt',
  'hello2.txt',
  'hello3.txt',
  'hello4.txt'
]

O/p: 2
file name is : hello0.txt
file name is : hello1.txt
file name is : hello2.txt
file name is : hello3.txt
file name is : hello4.txt
-----------------------------
# CRUD with File System

1. Make file
2. Read file
3. Update file
4. Rename file
5. Delete file

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
// console.log(dirPath);
const filePath = `${dirPath}/apple.txt`

// Make file
// fs.writeFileSync(filePath, 'content of this file text');

// Read file
fs.readFile(filePath, 'utf8', (err, item) => {
    console.log(item);
})

{/* <Buffer 63 6f 6e 74 65 6e 74 20 6f 66 20 74 68 69 73 20 66 69 6c 65 20 74 65 78 74> */}
// Note: will get this error for that reason we add utf8 as 2nd parameter

// final Output: content of this file text

// Update file
// fs.appendFile(filePath, ' updating the text content in the file', (err) => {
//     // in 3rd parameter only error exists no 2nd arg
    
//     if(!err) console.log('file is updated');    
// });

// Rename file
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if(!err) console.log('file name is changed');
// });

// Delete file
fs.unlinkSync(`${dirPath}/fruit.txt`);

-----------------------------------------

Buffer ?

--------------------------
# Asynchronous in Node.js

Eg.1
console.log('start exe...');

setTimeout(() => {
    console.log('logic exe...');
}, 2000);

console.log('complete exe...');

O/P:
start exe...
complete exe...
logic exe...

------------------------------------
Eg.2 [ The Best Example for Async ]
let a = 10;
let b = 0;

setTimeout(() => {
    b = 20;
}, 2000);

console.log(a+b);   // 10
--------------------------------------
# Handle Asynchronous Data in Node js

let a = 10;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20)
    }, 2000);
})

waitingData.then((data) => {
    b = data;
    console.log(a+b);
});

O/P: 30
-----------------------------
# How Node js Works
1. Call Stack
2. Node API
3. CallBack Queue

# Node JS Architecture:

console.log("starting up");
setTimeout(() => {
    console.log("2 second log");
}, 2000);
setTimeout(() => {
    console.log("0 second log");
}, 0);
console.log("finishing up");

// starting up
// finishing up
// 0 second log
// 2 second log
------------------------
# Express JS 	[ framework of Node ]
-> npm i express

const express = require('express');
// convert express into executable
const app = express();

app.get('', (req, res) => {
    console.log("data sent by browser", req.query.name);
    // http://localhost:5000/?name=malik
    // data sent by browser { name: 'malik' }
    
    // res.send("Welcome, this is Home Page");
    res.send("Welcome, "+ req.query.name)
    // Welcome, malik
});

app.get('/about', (req, res) => {
    res.send("Hello, this is About Page");
});

app.get('/help', (req, res) => {
    res.send("Hello, this is Help Page");
});

app.listen(5000);

// In terminal - Use nodemon (to execute installing without updating)
nodemon .\index.js
	Browser run correctly without any error
---------------------------------------------------------
# Render HTML and JSON

const express = require('express');
// convert express into executable
const app = express();

app.get('', (req, res) => {
    res.send(`<h1>Welcome, this is Home Page</h1>
        <a href="/about">Go To About Page</a>
    `)
});

app.get('/about', (req, res) => {    
    res.send(`
        <input type='text' 
            placeholder='User Name' 
            value=${req.query.name} />
        <button>Click Me</button>
        <a href="/">Go To Home Page</a>
    `);
});

app.get('/help', (req, res) => {
    res.send([
        {
            name: 'Malik',
            email: 'malik@gmail.com'
        },
        {
            name: 'Sheik',
            email: 'sheik@gmail.com'
        }
    ]);
});

app.listen(5000);

// http://localhost:5000/about?name=Malik
-------------------------------------------
# Make HTML Page

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');
// console.log(publicPath);    // E:\node_crash\public

app.use(express.static(publicPath));

app.listen(5000);
----------------------
public > index.html >
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Home Page</title>
        <style>
            h1 {
                color: green;
            }
        </style>
    </head>
    <body>
        <h1>Home Page</h1>
    </body>
</html>
------------------------
public > about.html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>About Page</title>
        <style>
            h1 {
                color: red;
            }
        </style>
    </head>
    <body>
        <h1>About Page</h1>
    </body>
</html>

// http://localhost:5000/about.html
------------------------------------
# Remove extension from URL

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');
// console.log(publicPath);    // E:\node_crash\public

// app.use(express.static(publicPath));

app.get('', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/about', (_, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
});

app.get('/help', (_, resp) => {
    resp.sendFile(`${publicPath}/help.html`)
});

app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/noPage.html`)
})

app.listen(5000);
--------------------
public > noPage.html

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Not a valid Page</title>
        <style>
            h1 {
                color: red;
            }
        </style>
    </head>
    <body>
        <h1>404 - Page No Found</h1>
    </body>
</html>

Eg: http://localhost:5000/about25

404 - Page No Found
----------------------------------
# Template Engine ?

1. install ejs template package
-> https://www.npmjs.com/package/ejs
-> npm i ejs
---------------------------------------------------
Note: ejs is used to create HTML Page from Node js
---------------------------------------------------
2. setup dynamic routing
3. Make dynamic Page

Eg: index.jx ( for ejs )
const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

// Mandatory to set - same and also create a folder "views"
app.set('view engine', 'ejs');		// ****

app.get('', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/profile', (_, resp) => {	// *** for ejs
    const user = {
        name: 'munavar sheik',
        email: 'munavar@gmail.com',
        city: 'Vijayawada'
    }
    resp.render('profile', {user})
});

app.get('/about', (_, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
});

app.get('/help', (_, resp) => {
    resp.sendFile(`${publicPath}/help.html`)
});

app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/noPage.html`)
})

app.listen(5000);

	-----SEQUENCES-----
views > profile.ejs

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Page</title>
</head>
<body>
    <h1>Welcome - <%= user.name %></h1>
    <h3>Email: <%= user.email %></h3>
    <h3>City - <%= user.city %></h3>
</body>
</html>
----------------------------------------
# Dynamic Page - 
-> How to make loop in ejs
-> Make Header file
-> Show common header file

index.js >
const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/profile', (_, resp) => {
    const user = {
        name: 'munavar sheik',
        email: 'munavar@gmail.com',
        city: 'Vijayawada',
        skills: ['php', 'js', 'C++', 'Java', 'Node']
    }
    resp.render('profile', {user})
});

app.get('/login', (_, resp) => {
    resp.render('login');
});

app.get('/about', (_, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
});

app.get('/help', (_, resp) => {
    resp.sendFile(`${publicPath}/help.html`)
});

app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/noPage.html`)
})

app.listen(5000);

--- views > common > header.ejs ---
<nav>
    <h3>Header File</h3>
</nav>

--- views > login.ejs ---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
</head>
<body>
    <%- include('common/header.ejs'); %>
    <h1>This is a Login Page</h1>
</body>
</html>

--- views > profile.ejs ---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Page</title>
</head>
<body>
    <%- include('common/header.ejs') %>		// here <%- represents html render
    <h1>Welcome - <%= user.name %></h1>
    <h3>Email: <%= user.email %></h3>
    <h3>City - <%= user.city %></h3>
    <ul>
        <% user.skills.forEach((skill) => {    %>
            <li><%= skill %></li>
        <%  }) %>
    </ul>
</body>
</html>

O/p: http://localhost:5000/profile

Header File
Welcome - munavar sheik
Email: munavar@gmail.com
City - Vijayawada
php
js
C++
Java
Node
----------------------------------
# Middleware

const express = require('express');
const app = express();

const reqFilter = (req, resp, next) => {	// Middleware
    // console.log('reqFilter');
    if(!req.query.age) {
        resp.send('Please provide age..!')
    } else if(req.query.age < 18) {
        resp.send('You can not access this page')
    } else {
        next();					// Mandatory
    }
};
app.use(reqFilter);		// for accessing [ Application -Level Middleware ]


app.get("/", (req, resp) => {
    resp.send('Welcome to Home Page');
});

app.get("/users", (req, resp) => {
    resp.send('Welcome to Users Page');
})

app.listen(5000);

http://localhost:5000/?age=19
// Welcome to Home Page

http://localhost:5000/?age=17
// You can not access this page

http://localhost:5000/
// Please provide age..!
----------------------------------
# Middleware Types
1. Application-level middleware
2. Router-level middleware
   -> Route Level Middleware
   -> Make Middleware on single Route
   -> Make Middleware in different file
   -> Apply Middleware in the group of route
3. Error-handling middleware
4. Built-in middleware
5. Third-party middleware

--------------------------------
Eg:2.2 (above)
const express = require('express');
const app = express();

const reqFilter = (req, resp, next) => {
    // console.log('reqFilter');
    if(!req.query.age) {
        resp.send('Please provide age..!')
    } else if(req.query.age < 18) {
        resp.send('You can not access this page')
    } else {
        next();
    }
};

app.get("/", (req, resp) => {
    resp.send('Welcome to Home Page');
});

app.get("/users", reqFilter, (req, resp) => {	// Single Route
    resp.send('Welcome to Users Page');
})

app.get("/about", (req, resp) => {
    resp.send('Welcome to About Page');
})

app.listen(5000);

// http://localhost:5000/users?age=19	// Here Users Page visible with age query
// http://localhost:5000/age=19		// Home Page Visible
-----------------------------------------------------------------------------------
Eg 2.3	[Make Middleware in different file]

middleware.js >
module.exports = reqFilter = (req, resp, next) => {
    // console.log('reqFilter');
    if(!req.query.age) {
        resp.send('Please provide age..!')
    } else if(req.query.age < 18) {
        resp.send('You can not access this page')
    } else {
        next();
    }
};
// app.use(reqFilter);
*************************
index.js >
const express = require('express');
const reqFilter = require('./middleware');
const app = express();

app.get("/", (req, resp) => {
    resp.send('Welcome to Home Page');
});

app.get("/users", reqFilter, (req, resp) => {
    resp.send('Welcome to Users Page');
})

app.get("/about", (req, resp) => {
    resp.send('Welcome to About Page');
})

app.listen(5000);

---------------------------------------------
Eg 2.4 [Apply Middleware in the group of route]

const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();

// For Group of route to handle
route.use(reqFilter);

app.get("/", (_, resp) => {
    resp.send('Welcome to Home Page');
});

app.get("/about", (_, resp) => {
    resp.send('Welcome to About Page');
});

route.get("/users", (_, resp) => {		// app to route need to change
    resp.send('Welcome to Users Page');
});

route.get("/contact", (_, resp) => {		// for accessing 
    resp.send('Welcome to Contact Page');
});
app.use('/', route);				// Need to merge

app.listen(5000);

------------------------------------------------------------------
# MongoDB
1. Download DB		// https://www.mongodb.com/try/download/community
2. Install MongoDB	
3. Set Enivronment for Mongo
4. Mongobd compass Tool

Q) How to check MongoDB installed properly or not ?
A) cmd > mongo

C:\Users\91970>mongo
MongoDB shell version v5.0.9
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("50fd56b3-1ea0-4fa0-823f-f429a0973667") }
MongoDB server version: 5.0.9
================
Warning: the "mongo" shell has been superseded by "mongosh",
which delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in
an upcoming release.
For installation instructions, see
https://docs.mongodb.com/mongodb-shell/install/
================
---
The server generated these startup warnings when booting:
        2022-07-15T15:50:55.167+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
newdb   0.000GB

2. cmd > show dbs

3. C:\Program Files\MongoDB\Server\5.0\bin 
> Edit Envirnoment > Path (db click) > add above link [ OK ]
-------------------------------------------------------------
>>> MongoDB Compass Screen Opens <<<
-------------------------------------
Q) What is mongoDB?
-> MongoDB is a NoSQL database.
-> The data stored in a collection.
-> Collection dont have row and columns.
-> Data is stored in the form of object.

# MongoDB has a terimal ==> _MONGOSH (open)
1. show dbs
2. use dbName (with which you want to create it)
3. db.createCollection('collectionName');
4. Done
************
Eg:
1. use m2-db
'switched to db m2-db'
2. db.createCollection('m2-collection');
{ ok: 1 }
> show dbs 

3. show collections
4. db.createCollection('another-collection')	X

Note: In MongoDB, collections are not supposed to include certain characters like, for 
example, a hyphen "-" or a slash "/". The manual has this to say on the matter:

5.db.createCollection('anotherCollection')
6.show collections 
7. db.anotherCollection.drop()		// Collection will delete

8. > db.dropDatabase() 			// For deleting db
   { "ok" : 1 }		

--------------------------------------------------------------------

https://stackoverflow.com/questions/30948151/how-to-drop-or-delete-a-collection-in-mongodb

--------------------------------------------------------------------
# Crud Operations in MongoDB
1. How to insert data Collection
2. How to check Inserted Data
3. How to Update Data
4. How to delete Data

1. Insert a data Collection
// use dbName (Switch)
// db.products.insertOne({name: 'iPhone', brand: 'Apple', price: 46000, category: 'Mobile'});

{
  "_id": {
    "$oid": "62d227747749213e3cab257e"
  },
  "name": "iPhone",
  "brand": "Apple",
  "price": 46000,
  "category": "Mobile"
}

Note: No need to create id

> db.products.insertMany([{name: 'Vivo', price: 5200}, {name: 'Mouse', price: 300} ]

> db.products.find()
or
> db.products.findOne({price: 300})	// 1 result

> db.products.find().pretty() 	// structure format
{
  // data
}
{
  // data
}
----------------------------
2. db.products.find();
----------------------------
3. For Update		// $set is ****

db.products.updateOne({name: "iphone"}, {$set: {price: 75000}});

{ acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0 }
---------------------------------------------------------------------
4. For Delete

db.products.deleteOne({brand: "Nokia"})

{ acknowledged: true, deletedCount: 1 }

-----------------------------------------
> use eComDB
switched to db eComDB
> db.stats()
{
        "db" : "eComDB",
        "collections" : 1,
        "views" : 0,
        "objects" : 2,
        "avgObjSize" : 88,
        "dataSize" : 176,
        "storageSize" : 36864,
        "indexes" : 1,
        "indexSize" : 36864,
        "totalSize" : 73728,
        "scaleFactor" : 1,
        "fsUsedSize" : 113548906496,
        "fsTotalSize" : 254721126400,
        "ok" : 1
}
---------------------------------------
# Connect Node with MongoDB

1. Install MongoDB Package		// npm i mongodb
2. Connect MongoDB with Node.js
3. Show Data from mongoDB

---------------------
npm install mongoose
----------------------

ctl + k  === clear the mongo shell

> exit 	// for exit the shell
bye
--------------------------------------
Sample Example: >

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = 'mongodb://localhost:27017';

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

connect();

app.listen(8000, () => {
    console.log("Server started on port 8000");
})
------------------------------------------------
Eg 2
const { MongoClient } = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

// Connection URL
// const url = 'mongodb://localhost:27017';
const url = "mongodb://0.0.0.0:27017";
const client = new MongoClient(url);

// DataBase Name
const database = 'eComDB';

async function getData() {
    // Use connect method to connect to the server
    let result = await client.connect();
    // console.log('Connected successfully to server');
    db = result.db(database);
    collection = db.collection('products');

    let data = await collection.find({}).toArray();
    console.log(data);

    // return data;
}

getData();
----------------------------------------------------------------
*** Err_Note: MongoServerSelectionError: connect ECONNREFUSED ::1:27017

// instead of this
const url = "mongodb://localhost:27017";

// Just Replace
const url = "mongodb://0.0.0.0:27017";

--------------------------------------------
# Read Data from MongoDB

Eg: index.js >
const { MongoClient }  = require('mongodb');

// Connection URL
const url = "mongodb://0.0.0.0:27017";
const client = new MongoClient(url);

// DataBase Name
const database = 'eComDB';

async function dbConnect() {
    let result = await client.connect();
    db = result.db(database);

    return db.collection('products');
}

// Promise Method:
dbConnect().then((resp) => {
    // console.log(resp.find().toArray());	

    resp.find().toArray().then((data) => {	// Here toArray() acts as promise
        console.warn(data)
    });

    // resp.find({name: 'A 50'}).toArray().then((data) => {
    //     console.warn(data)
    // });
});

// console.log((dbConnect()));
---------------------------------------------------
--- AnotherWay to do it by 'async await' ----------
Eg:
const { MongoClient }  = require('mongodb');

// Connection URL
const url = "mongodb://0.0.0.0:27017";
const client = new MongoClient(url);

// DataBase Name
const database = 'eComDB';

async function dbConnect() {
    let result = await client.connect();
    db = result.db(database);

    return db.collection('products');
}

// async await
const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();
-------------------------------------------------------
# Default setting the db || How to connect db to Node?
mongodb.js >
const { MongoClient }  = require('mongodb');

// Connection URL
const url = "mongodb://0.0.0.0:27017";
const client = new MongoClient(url);

// DataBase Name
const database = 'eComDB';

async function dbConnect() {
    let result = await client.connect();
    db = result.db(database);

    return db.collection('products');
}

module.exports = dbConnect;

index.js >
const dbConnect = require('./mongodb')

// async await
const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();
------------------------------------------
# Insert Data from MongoDB:
1. Make New File for Insert data
2. Import MongoDB Connection
3. Insert single and multiple records

1. insert.js >
const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insert([
        {
            name: 'max 1',
            brand: 'micromax',
            price: 27500,
            category: 'Mobile'
        },
        {
            name: 'max 2',
            brand: 'micromax',
            price: 7500,
            category: 'Mobile'
        },
        {
            name: 'max 5',
            brand: 'micromax',
            price: 97500,
            category: 'Mobile'
        }
    ]);
    // console.log(result);

    if(result.acknowledged) {
        console.log(("data inserted"));
    }
}

insert();

// terminal > nodemon insert.js

Note: Warning: collection.insert is deprecated. 
Use insertOne, insertMany or bulkWrite instead.
--------------------------------------
# Update Data from MongoDB:
1. Make New File for Insert data
2. Import MongoDB Connection
3. Insert single and multiple records

1. update.js >
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

O/P:
{
  acknowledged: true,
  modifiedCount: 1,
  upsertedId: null,
  upsertedCount: 0,
  matchedCount: 1
}

Note: updateOne() || update() -> ALL update
--------------------------------------------
# Delete Data in MongoDB
1. Make New File for Delete data
2. Import MongoDB Connection
3. Delete single and multiple records

Eg: delete.js >
const dbConnect = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnect();
    // console.warn(data);  // <pending> a promise

    let result = await data.deleteMany({
        name: 'max pro 2'
    });
    console.warn(result);

    if(result.acknowledged) {
        console.warn("record deleted")
    }
}

deleteData();

O/P:
{ acknowledged: true, deletedCount: 2 }
record deleted

Note: for 1 delete use deleteOne();
------------------------------------
## API with MongoDB ***

1. Make New File for API
2. Import and use Mongo Config 
3. Make API for get data
4. Test with Postman

Note: data to embeded
Eg:
const express = require('express');
// const dbConnect = require('./mongodb');
const app = express();
const main = require('./index');

// app.get('/', async (req, resp) => {
//     // resp.send({name: 'Malik'});

//     let data = await dbConnect();
//     data = await data.find().toArray();
//     // console.warn(data);    
//     resp.send(data);
// });

app.get('/', () => main());

app.listen(5000);

------------------------------------------
# Node js Post API method:

1. Make Post method for API
2. Send data from postman
3. Get data in node js by request
4. Write code for insert data in MongoDB

Eg: api.js >
const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

// Act like Middleware of connecting Postman to Node(MongoDB)
app.use(express.json());

app.post('/', async (req, resp) => {
    // resp.send({ name: 'Munavar'})    // static
    // resp.send(req.body);             // dynamic
    // console.log(req.body);

    let data = await dbConnect();
    let result = await data.insert(req.body);

    resp.send(result);    
})

app.get('/', async (req, resp) => {
    // resp.send({name: 'Malik'});

    let data = await dbConnect();
    data = await data.find().toArray();
    // console.warn(data);    
    resp.send(data);
});

app.listen(5000);

>>> in Postman open <<<
1. Select Post 
2. body
3. raw > select JSON
4. enter some detail { ... } 	

// Request Body 
{
    "name": "Nokia 1012",
    "brand": "Nokia",
    "price": 8500,
    "category": "Mobile"
}
5. click send

// Response Body
{
    "acknowledged": true,
    "insertedCount": 1,
    "insertedIds": {
        "0": "62d4f80571075dd2809db2ef"
    }
}

6. After that click all data pass to MOngoDB

7. For connecting mongo from postman
   use this syntax in node

	app.use(express.json()); 
----------------------------------------------
# Node js Put API method:

1. Make PUT method for API
2. Send data from postman
3. Handle data in node js by request
4. Write code for update data in MongoDB

Eg: api.js >
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
});

// app.put('/', async (req, resp) => {
//     // console.log(req.body);

//     let data = await dbConnect();
//     let result = await data.updateOne(
//         // {name: 'max 1'},
//         // {$set: {price: 9000}}
//         {name: req.body.name},
//         {$set: req.body}
//     );

//     // resp.send({result: 'update'});
//     resp.send(result);
// })

// used here params
app.put("/:name", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: req.params.name},
        {$set: req.body}
    );
    resp.send(result);
});

app.listen(5000);

O/P:
Postman > PUT > Body > raw >
http://localhost:5000/max 1
{
...
}

// Response Output: Body 
{
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
}

MongoDB Compass : FIND click
------------------------------------------
# Node js Delete API method:

1. Make Delete Method for API
2. Send data from postman
3. Handle data in node js by request
4. Write code for Delete data in MongoDB

Example: api.js >
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

// app.put('/', async (req, resp) => {
//     // console.log(req.body);

//     let data = await dbConnect();
//     let result = await data.updateOne(
//         // {name: 'max 1'},
//         // {$set: {price: 9000}}
//         {name: req.body.name},
//         {$set: req.body}
//     );

//     // resp.send({result: 'update'});
//     resp.send(result);
// })

// used here params
app.put("/:name", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: req.params.name},
        {$set: req.body}
    );
    resp.send(result);
});

app.delete('/:id', async (req, resp) => {
    // console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne(
        {_id: new mongodb.ObjectId(req.params.id)})
    // resp.send('Done');

    resp.send(result);
})

app.listen(5000);

Note: Need to copy id from mongodb and apply in postman
// http://localhost:5000/6257fbefhbjefb

------------------------------------------------------------
# Start With Mongoose	> npm install mongoose

1. What is Mongoose?
https://www.npmjs.com/package/mongoose

2. Diff b/w Mongoose vs Mongodb Package?
> we can check validation, schemas and fields controls...( in Mongoose )

3. Install Mongoose
4. what is schemas?
5. what is Model?
6. Connect Node js and MongoDB with Mongoose...

Example: index.js >
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
------------------------------------
Note: MongoDB Compass terminal >
db.products.deleteOne({name: 'M9'})
{ acknowledged: true, deletedCount: 1 }
-----------------------------------------

# CRUD with Mongoose
1. continue mongoose , model and schema...
2. update Record
3. delete Record
4. find and Read Result

Eg.1
const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/eComDB");

    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String,
        category: String 
    });
                                    //  collectionName, SchemeName
    const ProductModel = mongoose.model('products', ProductSchema);

    let data = new ProductModel(
        {name: 'M8', price: 7800, brand: 'Mi', category: 'Mobile'});
    let result = await data.save();
    console.log(result);  
}

main();

------------------------------------------------------------------------
Eg.2: index.js >
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
----------------------------------------
# Post API with MongoDB

1. Make config file for Mongodb
2. Make Post Route				****
3. Get data from the postman and save in DB

Example:
config.js >
const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/eComDB');

product.js >
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

module.exports = mongoose.model('products', ProductSchema);

index.js >
const express = require('express');
require('./config');
const Product = require('./product');

const app = express();
app.use(express.json());    // postmon json acquiring data

app.post("/create", async (req, resp) => {
    // console.log(req.body);
    // resp.send('Done');
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);   
    resp.send(result);
});

app.listen(5000);

POSTMAN > POST > http://localhost:5000/create
{
    "name": "U 50",
    "price": 5000,
    "brand": "Vivo",
    "category": "Mobile"
}

// Body 
{
    "name": "U 50",
    "price": 5000,
    "brand": "Vivo",
    "category": "Mobile",
    "_id": "62d6ac93d46de3bf889cd626",
    "__v": 0
}

MongoDB data created...
-------------------------------------------

# GET, DELETE AND PUT API


const express = require('express');
require('./config');
const Product = require('./product');

const app = express();
app.use(express.json());    // postmon json acquiring data

app.post("/create", async (req, resp) => {
    // console.log(req.body);
    // resp.send('Done');
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);   
    resp.send(result);
});

app.get('/list', async (req, resp) => {
    let data = await Product.find();
    resp.send(data)
});

app.delete('/delete/:_id', async (req, resp) => {
    // console.log(req.params);    // { _id: '62d68b1e14a1270dc231e8c1' }
    // resp.send('delete done')

    let data = await Product.deleteOne(req.params);
    resp.send(data);
    // {
    //  "acknowledged": true,
    //  "deletedCount": 1
    // }
});
----------------------------------------------------------------------------------
Note: postman > Delete > http://localhost:5000/delete/62d68b1e14a1270dc231e8c1
resp Body >
{
    "acknowledged": true,
    "deletedCount": 1
}
-----------------------------
app.put("/update/:_id", async (req, resp) => {
    console.log(req.params);
    let data = await Product.updateOne(
        req.params,
        {$set : req.body}
    );
    resp.send(data);
})
-------------------------------------------------------------------------------
// Note: postman > PUT > http://localhost:5000/update/62d4f80571075dd2809db2ef
Req body > raw > JSON>
{ "price": 1200 }

Resp Body >
{
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
}
--------------------------

app.listen(5000);
----------------------------------------------------------------------------

# Search API in Node js with MongoDB:

1. Make Simple GET Route for API
2. Search with Single field
3. Search with Multiple fields
4. Test API

Example: index.js >
const express = require('express');
require('./config');
const Product = require('./product');
const app = express();

// API Connectivity from Postman to Node with MongoDB
app.use(express.json());

app.get('/search/:key', async (req, resp) => {
    console.log(req.params.key);
    let data = await Product.find(
        {
            "$or": [
                { "name": {$regex: req.params.key}},
                { "brand": {$regex: req.params.key}},
                { "category": {$regex: req.params.key}}
            ]
        }
    );
    resp.send(data);
});

app.listen(5000);

Note: POSTMAN > GET > http://localhost:5000/search/max
Resp Body >
Result available
-------------------------------------------------------

# upload File in Node js [https://www.npmjs.com/package/multer]

1. Install Multer npm package 	- npm i multer
2. Make Router for upload file
3. write code for upload file

Example: index.js
const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, "uploadFolder")    // folderName
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + '.jpg') // fileName
        }
    })
}).single("file_2");

app.post('/upload', upload, (req, resp) => {
    resp.send("file upload");
});

app.listen(8000);

Note:
1. In Addition create an folder: uploadFolder
2. postman > post > http://localhost:8000/upload
   > Body > form-data
   > KEY - file_2
   > VALUE - uploadImage.jpg ...
3. Ok
4. #finally file uploaded in dir...
--------------------------------------------------

# OS Module in Node js 

1. what is OS Module
2. important functions of OS module

const os = require('os');
// console.log(os);
// console.log(os.arch()); // x64
// console.log(os.freemem());  // 1112735744 - this ram free this will be in bytes
// console.log(os.freemem()/ (1024*1024)); // 1143.17578125 Mega Byte
// console.log(os.totalmem()/ (1024*1024*1024));   // 7.8708953857421875 GB

// System Name - Host Name
// console.log(os.hostname()); // LAPTOP-NI67MVIT

// Platform Check
// console.log(os.platform()); // win32

// user Info
// console.log(os.userInfo());
// {
//     uid: -1,
//     gid: -1,
//     username: 'Malik',
//     homedir: 'C:\\Users\\91970',
//     shell: null
// }
-------------------------------------------
# Events and Event Emitter in Node js 

1. What is Events and Event Emitter
2. Make an event and call it 

Example:
const express = require('express');
const EventEmitter = require('events'); // E here Y - its a class
const app = express();
const event = new EventEmitter();

let count = 0;

event.on('countAPI', () => {
    count++;
    console.log('event called', count);
});

app.get('/', (req, resp) => {
    resp.send('api called');
    event.emit("countAPI");
});

app.get('/search', (req, resp) => {
    resp.send('search api called');
    event.emit("countAPI");
});

app.get('/update', (req, resp) => {
    resp.send('update api called');
    event.emit("countAPI");
});

app.listen(6000);

O/p: postman > GET > http://localhost:6000
http://localhost:6000/search
http://localhost:6000/update
--------------------------------------------------------------------
Note: *** event.on('exactName', () => {}) && event.emit('exactName')
---------------------------------------------------------------------
# REPL - Read-Eval-Print-loop

1. What is REPL
2. Example of REPL

cmd >
C:\Users\91970>node
Welcome to Node.js v18.0.0.
Type ".help" for more information.
> 2+2
4
> a=3;b=5;a+b
8
> function test(){
... console.log('test')
... }
undefined
> test()
test
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
function apple(){
console.log('This is a fruit')
}
		// ctl + d

undefined
> apple
[Function: apple]
>
> apple function
apple function
      ^^^^^^^^

Uncaught SyntaxError: Unexpected token 'function'
> apple()
This is a fruit
undefined
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
>

-------------------------------------------------------------------

# Node js Connect with MySQL - [ https://www.npmjs.com/package/mysql ]

1. Install MySQL npm package - npm i mysql
2. Connect node js and MySQL
3. Get data from mysql

https://www.apachefriends.org/index.html

https://hevodata.com/learn/xampp-mysql/

-------------------------------------------
small Example:
conn.connect((err) => {
    if(err) throw err;
    console.log('connected');

    // conn.query('CREATE DATABASE test', function(err, result) {
    //     if(err) throw err;
    //     console.log('Database created');
    // });
});

----------------------------------------------------------
*** Main Example: index.js >

const express = require('express');
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});
// connection connect or not checking 
conn.connect((err) => {
    if(err) {
        console.warn("error");
    } else {
        console.log('connected');
    }
});

conn.query("select * from users", (err, result) => {
    console.warn("result", result);
});

Note: Here we need to run XAMPP > appache + mysql & mysql (admin to be on)
http://localhost/phpmyadmin/index.php?route=/database/structure&db=test

------------------------------------------------------------------------------
# Node js GET API with MySQL

1. Make Config file
2. Make Route for API
3. Get data from MySQL

Example: index.js >
const express = require('express');
const app = express();
const conn = require('./config');

app.get('/', (req, resp) => {
    conn.query('select * from users', (err, result) => {
        if(err) {
            resp.send('error')
        } else {
            resp.send(result);
        }
    })
})

app.listen(5000);

config.js >
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

conn.connect((err) => {
    if(err) {
        console.warn("error");
    } else {
        console.log('connected');
    }
});

module.exports = conn;
------------------------------------------
# Node js POST API with MySQL
1. Make Route for API
2. Insert data in MySQL

Example: index.js >
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
})

app.listen(5000);

O/p: postman > POST > http://localhost:5000/
Body> raw > JSON application>
{
    "name": "Sheik",
    "password": "4646",
    "user_type": "visitor"
}
Body >
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "serverStatus": 2,
    "warningCount": 1,
    "message": "",
    "protocol41": true,
    "changedRows": 0
}

Note check result: http://localhost/phpmyadmin/index.php?route=/sql&db=test&table=users&pos=0

--------------------------------------------------------------------------------------------------
# Node js PUT API with MySQL

1. Make Route for API
2. Get data from Postman
3. Update data in MySQL

Example: index.js >
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
    // resp.send('update api working');
    // const data = ["tony", "0000", "reader", 1];    // the data comes in array and its static

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

app.listen(5000);

O/P: POSTMAN > PUT > http://localhost:5000/1

Body > raw > JSON >
{
    "name": "Malik",
    "password": "369369",
    "user_type": "reader",
    "id": 1
}

Body >
{
    "fieldCount": 0,
    "affectedRows": 1,		// If condition ?
    "insertId": 0,
    "serverStatus": 34,
    "warningCount": 0,
    "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
    "protocol41": true,
    "changedRows": 1
}

------------------------------------------------------------------
# Node js Delete API with MySQL
1. Make Route for API
2. Get Data from Postman
3. Delete data from MySQL

Example: index.js >
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

O/P: POSTMAN > DELETE > http://localhost:5000/0
Body:
{
    "fieldCount": 0,
    "affectedRows": 0,
    "insertId": 0,
    "serverStatus": 34,
    "warningCount": 0,
    "message": "",
    "protocol41": true,
    "changedRows": 0
}
--------------------------------------------------------

 
