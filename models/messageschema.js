const mongoose = require("mongoose");
const messageschema = new mongoose.Schema({
  targetId: {
    type: String,
    required: false,
  },
  senderId:{
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
  timestamp: {
    type: Date,
    default:Date.now,
  }
});

const messageschemas = mongoose.model("messages", messageschema);

module.exports = messageschemas;
