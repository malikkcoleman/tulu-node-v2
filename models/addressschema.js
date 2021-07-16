const mongoose = require('mongoose');
const addressschema = new mongoose.Schema(
  {
    targetId: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    province: {
      type: String,
      required: true
    },
    postal: {
      type: String,
      required: true
    }
  }
);


const addressschemas = mongoose.model('address', addressschema);

module.exports = addressschemas;