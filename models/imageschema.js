const mongoose = require('mongoose');
const imageschema = new mongoose.Schema(
  {
    image_type: {
      type: String,
      required: true
    },
    target_id: {
      type: String,
      required: true
    },
    is_deleted: {
      type: Boolean,
      required: true,
      default: false
    },
    file_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    is_display_photo: {
      type: Boolean,
      required: true,
      default: false
    }
  }
);


const imageschemas = mongoose.model('imageinfo', imageschema);

module.exports = imageschemas;