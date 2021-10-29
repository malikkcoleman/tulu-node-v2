const mongoose = require("mongoose");
const messagethreadschema = new mongoose.Schema({
  participants: {
    type: Array,
    required: true,
  },
});

const messagethreadschemas = mongoose.model("messageThread", messagethreadschema);

module.exports = messagethreadschemas;
