const mongoose = require('mongoose');
const dealerschema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    website: {
      type: String,
      required: true
    }
  }
);


const dealerschemas = mongoose.model('dealers', dealerschema);

module.exports = dealerschemas;