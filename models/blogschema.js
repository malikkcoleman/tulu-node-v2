const mongoose = require("mongoose");
const blogschema = new mongoose.Schema({
  blogName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default:Date.now,
  }
});

const blogschemas = mongoose.model("blog", blogschema);

module.exports = blogschemas;
