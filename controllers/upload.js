const upload = require("../middleware/upload");
const uploadmultiple = require("../middleware/uploadmultiple")
const Image = require("../models/imageschema");

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
      await upload(req, res);
      console.log(req.params)
      imageType = "resume"
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
        res.redirect('/UploadResume/'+req.params.targetid) 
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