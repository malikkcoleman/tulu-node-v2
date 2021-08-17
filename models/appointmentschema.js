const mongoose = require("mongoose");
const appointmmentschema = new mongoose.Schema({
  dealerId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  tuluId: {
    type: String,
    required: false,
  },
  vin: {
    type: String,
    required: true,
  },
  vehiclePrice: {
    type: String,
    required: false,
  },
  customer: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  postalcode: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  preferred: {
    type: String,
    required: true,
  },
  alternate: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default:Date.now,
  }
});

const appointmmentschemas = mongoose.model("appointment", appointmmentschema);

module.exports = appointmmentschemas;
