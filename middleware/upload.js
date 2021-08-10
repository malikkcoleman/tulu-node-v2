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
  gfs.collection('photos')
});
const storage = new GridFsStorage({
  url: process.env.DB_CONNECTION,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'photos'
        };
        resolve(fileInfo);
      });
    });
  }
});

var uploadFile = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware;