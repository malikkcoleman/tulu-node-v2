const mongoose = require("mongoose");
const messageschema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  targetId: {
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

const messageschemas = mongoose.model("message", messageschema);

module.exports = messageschemas;
