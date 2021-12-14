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
  gfs.collection('photos')
});

function getImage(req, res){
    fetchImage.find({target_id: req.params.targetid, is_deleted: false, is_display_photo: true}).then(function(data){
        
        gfs.files.findOne({_id: data[0].file_id}, (err, file) => {
            if(!file || file.length === 0){
                return res.status(404).json({
                    err: 'No file Exists'
                })
            }
            if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'|| file.contentType === 'application/pdf'){
                const readstream = gfs.createReadStream(file.filename);
                readstream.pipe(res)
            } else {
                res.status(404).json({
                    err: 'not an image'
                })
            }
        })
    }).catch(rrr => {
        var img = fs.readFileSync('./public/images/noimageavailable.jpg');
            res.writeHead(200, {'Content-Type': 'image/png' });
            res.end(img, 'binary');
    })
}

function getCarImage(req, res){
    fetchImage.find({target_id: req.params.targetid, is_deleted: false, file_id: req.params.fileId }).then(function(data){
        gfs.files.findOne({_id: data[0].file_id}, (err, file) => {
            if(!file || file.length === 0){
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

async function getImagesArray(targetId){
    let test = await fetchImage.find({target_id: targetId, is_deleted: false}).then(function(data){
        return data
    })
    return test
}

async function deleteImages(targetId){
    await fetchImage.find({target_id: targetId}).then(function(data){
        data.forEach(async photos => {
            const obj_id = new mongoose.Types.ObjectId(photos.file_id);
            gfs.remove({_id: obj_id, root: 'photos'}, (err, gridStore) => {
                if(err){
                    return res.status(404).json({err: err})
                }
            })
        });
    })
    
    let deleteImageinfo = await fetchImage.deleteMany({target_id: targetId}).then(function(data){
        return data
    })

    return deleteImageinfo

}

  
module.exports = {getImage, getImagesArray, getCarImage, deleteImages};