const mongoose = require('mongoose');

const testdriveSchema = new mongoose.Schema({
    fname:{
        type:String,
        required: false
    },
    lname:{
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
    year:{
        type:String,
        required: false
    },
    make:{
        type:String,
        required: false
    },
    model:{
        type:String,
        required: false
    },
    vinNumber:{
        type:String,
        required: false
    },
    dealershipName:{
        type:String,
        required: false
    },
    when:{
        type:String,
        required: false
    },
    date:{
        type:Date,
        default: Date.now
    }
});


const TestDrive = mongoose.model('TestDrive',testdriveSchema);

module.exports = TestDrive;