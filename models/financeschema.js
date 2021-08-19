const mongoose = require('mongoose');

const FinanceSchema = new mongoose.Schema({
    fname:{
        type:String,
        required: true
    },
    lname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    number:{
        type:String,
        required: true
    },
    condition:{
        type:String,
        required: true
    },
    vehicleType:{
        type:String,
        required: true
    },
    budget:{
        type:String,
        required: true
    },
    trade:{
        type:String,
        required: true
    },
    creditScore:{
        type:String,
        required: true
    },
    employment:{
        type:String,
        required: true
    },
    incomeDetails:{
        type:String,
        required: true
    },
    hourly:{
        type:String,
        required: true
    },
    employer:{
        type:String,
        required: true
    },
    privacyConsent:{
        type:String,
        required: true
    },
    emailConsent:{
        type:String,
        required: true
    },
    hourly:{
        type:String,
        required: true
    },
    hourly:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
});


const Finance = mongoose.model('Finance',FinanceSchema);

module.exports = Finance;