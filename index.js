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