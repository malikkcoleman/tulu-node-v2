const mongoose = require("mongoose");
const contactschema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default:Date.now,
  }
});

const contactschemas = mongoose.model("contact", contactschema);

module.exports = contactschemas;
