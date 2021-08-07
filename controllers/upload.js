const upload = require("../middleware/upload");
const Image = require("../models/imageschema");

const uploadFile = async (req, res) => {
  try {
    await upload(req, res);

    console.log(req.file);
    if (req.file == undefined) {
      console.log(`You must select a file.`);
    }
    console.log(`File has been uploaded.`);
    Image.updateMany({target_id: req.user.toObject()._id}, {is_deleted: true}).then(function(data){
      const image = new Image({
          image_type: "profile",
          target_id: req.user.toObject()._id,
          is_deleted: false,
          file_id: req.file.id,
          is_display_photo: false
      })
      image.save().then(function(){
        res.redirect('/users/EditProfile');
      })
    })
  } catch (error) {
    console.log(`Error when trying upload image: ${error}`);
  }
};

module.exports = {
  uploadFile: uploadFile
};