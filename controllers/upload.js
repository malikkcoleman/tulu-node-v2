const upload = require("../middleware/upload");
const uploadmultiple = require("../middleware/uploadmultiple")
const file_upload = require("../middleware/file_upload")
const Image = require("../models/imageschema");
const File = require("../models/fileschema");

const uploadFile = async (req, res) => {
  try {
    var imageType
    if(req.params.type == 'profile'){
      await upload(req, res);
      imageType = "profile"
      Image.updateMany({target_id: req.user.toObject()._id}, {is_deleted: true}).then(function(data){
        const image = new Image({
            image_type: imageType,
            target_id: req.params.targetid,
            is_deleted: false,
            file_id: req.file.id,
            is_display_photo: true
        })
        image.save().then(function(){
        })
        res.redirect('/users/EditProfile') 
      })
    }else if(req.params.type == 'vehicle'){
      imageType = "vehicle"
      await uploadmultiple(req, res)
      Image.updateMany({target_id: req.params.targetid}, {is_deleted: true}).then(function(data){

        req.files.forEach(function(file){
          const image = new Image({
            image_type: imageType,
            target_id: req.params.targetid,
            is_deleted: false,
            file_id: file.id,
            is_display_photo: false
        })
        image.save()
        })
        res.redirect('/vehicles/EditVehicle/'+req.params.targetid) 
      })
    }else if(req.params.type == 'license'){
      await upload(req, res);
      console.log(req.params)
      imageType = "license"
      Image.updateMany({target_id: req.params.targetid}, {is_deleted: true}).then(function(data){
        const image = new Image({
            image_type: imageType,
            target_id: req.params.targetid,
            is_deleted: false,
            file_id: req.file.id,
            is_display_photo: true
        })
        image.save().then(function(){
        })
        res.redirect('/UploadLicense/'+req.params.targetid) 
      })
    }else if(req.params.type == 'resume'){
      await file_upload(req, res);
      console.log(req.params)
      fileType = "resume"
      File.updateMany({target_id: req.params.targetid}, {is_deleted: true}).then(function(data){
        const file = new File({
            file_type: fileType,
            target_id: req.params.targetid,
            is_deleted: false,
            file_id: req.file.id,
            is_display_photo: true
        })
        file.save().then(function(){
        })
        res.redirect('/UploadResume/'+req.params.targetid) 
      })
    }else if(req.params.type == 'event'){
      await upload(req, res);
      console.log(req.params)
      imageType = "event"
      Image.updateMany({target_id: req.params.targetid}, {is_deleted: true}).then(function(data){
        const image = new Image({
            image_type: imageType,
            target_id: req.params.targetid,
            is_deleted: false,
            file_id: req.file.id,
            is_display_photo: true
        })
        image.save().then(function(){
        })
        res.redirect('/UploadEvent/'+req.params.targetid) 
      })
    }

    if (req.file == undefined) {
      console.log(`You must select a file.`);
    }
    console.log(`File has been uploaded.`);
    
    
  } catch (error) {
    console.log(`Error when trying upload image: ${error}`);
  }
};

module.exports = {
  uploadFile: uploadFile
};