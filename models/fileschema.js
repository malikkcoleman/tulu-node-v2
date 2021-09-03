const mongoose = require('mongoose');
const fileschema = new mongoose.Schema(
  {
    file_type: {
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
    }
  }
);


const fileschemas = mongoose.model('fileinfo', fileschema);

module.exports = fileschemas;