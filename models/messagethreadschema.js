const mongoose = require("mongoose");
const messagethreadschema = new mongoose.Schema({
  userOneId: {
    type: String,
    required: true,
  },
  userTwoId: {
    type: String,
    required: true,
  },
});

const messagethreadschemas = mongoose.model("messageThread", messagethreadschema);

module.exports = messagethreadschemas;
