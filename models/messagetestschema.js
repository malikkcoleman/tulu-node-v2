const mongoose = require("mongoose");
const messagetestschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  SubjectText: {
    type: String,
    required: true,
  },
  BodyText: {
    type: String,
    required: true,
  }
});

const messagetestschemas = mongoose.model("message", messagetestschema);

module.exports = messagetestschemas;
