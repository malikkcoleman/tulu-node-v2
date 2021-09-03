const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: false
    },
    email:{
        type:String,
        required: false
    },
    phoneNumber:{
        type:String,
        required: false
    },
    yearsOfSales:{
        type:String,
        required: false
    },
    amvic:{
        type:String,
        required: false
    },
    timestamp:{
        type:Date,
        default: Date.now
    }
});


const application = mongoose.model('application',applicationSchema);

module.exports = application;