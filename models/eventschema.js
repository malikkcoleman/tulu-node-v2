const mongoose = require("mongoose");
const eventschema = new mongoose.Schema({
  eventName: {
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

const eventschemas = mongoose.model("event", eventschema);

module.exports = eventschemas;
