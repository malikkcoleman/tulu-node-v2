const mongoose = require('mongoose');
const userschema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    fName: {
      type: String,
      required: true
    },
    lName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    linkedin: {
      type: String,
      required: false
    },
    instagram: {
      type: String,
      required: false
    },
    facebook: {
      type: String,
      required: false
    },
    bio: {
      type: String,
      required: false
    },
    experience: {
      type: String,
      required: false
    },
    specialty: {
      type: String,
      required: false
    },
    favoriteCar: {
      type: String,
      required: false
    },
    currentCar: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false
    },
    phoneNumber: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      default:'user'
    },
    date:{
      type:Date,
      default: Date.now
    },
    uuid: {
      type: String,
      required: true
    },
  }
);


const userschemas = mongoose.model('users', userschema);

module.exports = userschemas;