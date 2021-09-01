const util = require("util");
const multer = require("multer");
const express = require("express");
const mongoose = require('mongoose')
const {GridFsStorage} = require("multer-gridfs-storage");
const crypto = require('crypto');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const app = express();
const bodyparser = require('body-parser')
const path = require("path");
const fetchFile = require("../models/fileschema");
const fs = require("fs");
require("dotenv").config();


app.use(bodyparser.json());
app.use(methodOverride('_method'));

const conn = mongoose.createConnection(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

let gfs;

conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('files')
});

function downloadFile(req, res){
    fetchFile.find({target_id: req.params.targetid, is_deleted: false}).then(function(data){
        
        gfs.files.findOne({_id: data[0].file_id}, (err, file) => {
            if (err) {
                // report the error
                console.log(err);
            } else {
                // detect the content type and set the appropriate response headers.
                let mimeType = file.contentType;
                if (!mimeType) {
                    mimeType = mime.lookup(file.filename);
                }
                res.set({
                    'Content-Type': mimeType,
                    'Content-Disposition': 'attachment; filename=' + file.filename
                });
    
                const readStream = gfs.createReadStream({
                    _id: data[0].file_id
                });
                readStream.on('error', err => {
                    // report stream error
                    console.log(err);
                });
                // the response will be the file itself.
                readStream.pipe(res);
            }
        })
    }).catch(rrr => {
        var img = fs.readFileSync('./public/images/noimageavailable.jpg');
            res.writeHead(200, {'Content-Type': 'image/png' });
            res.end(img, 'binary');
    })
}

  
module.exports = {downloadFile};