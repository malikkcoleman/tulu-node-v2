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
const fetchImage = require("../models/imageschema");
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


function getFiles(req, res){
    gfs.files.find().toArray((err, files) => {
        if(!files || files.lenth === 0){
            return res.status(404).json({
                err: 'No files Exist'
            })
        }
        return res.json(files)
    })
}

function getFile(req, res){
    gfs.files.findOne({filename: req.params.filename}, (err, file) => {
        if(!file || file.lenth === 0){
            return res.status(404).json({
                err: 'No file Exists'
            })
        }
        return res.json(file)
    })
}

function getImage(req, res){
    fetchImage.find({target_id: req.params.targetid, is_deleted: false}).then(function(data){
        console.log(data)
        gfs.files.findOne({_id: data[0].file_id}, (err, file) => {
            if(!file || file.lenth === 0){
                return res.status(404).json({
                    err: 'No file Exists'
                })
            }
            if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
                const readstream = gfs.createReadStream(file.filename);
                readstream.pipe(res)
            } else {
                res.status(404).json({
                    err: 'not an image'
                })
            }
        })
    })
}

function getCarImage(req, res){
    fetchImage.find({target_id: req.params.targetid, is_deleted: false, file_id: req.params.fileId }).then(function(data){
        gfs.files.findOne({_id: data[0].file_id}, (err, file) => {
            if(!file || file.lenth === 0){
                return res.status(404).json({
                    err: 'No file Exists'
                })
            }
            if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
                const readstream = gfs.createReadStream(file.filename);
                readstream.pipe(res)
            } else {
                res.status(404).json({
                    err: 'not an image'
                })
            }
        })
    })
}

var datarray = []
function getImagesArray(targetId){
    fetchImage.find({target_id: targetId, is_deleted: false}, (err, data) => {
        datarray = data
    })
    return datarray
}

  
module.exports = {getFiles, getFile, getImage, getImagesArray, getCarImage};