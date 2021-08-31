const mongoose = require('mongoose');

const FinanceSchema = new mongoose.Schema({
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
    email:{
        type:String,
        required: false
    },
    number:{
        type:String,
        required: false
    },
    condition:{
        type:String,
        required: false
    },
    vehicleType:{
        type:String,
        required: false
    },
    budget:{
        type:String,
        required: false
    },
    trade:{
        type:String,
        required: false
    },
    creditScore:{
        type:String,
        required: false
    },
    employment:{
        type:String,
        required: false
    },
    incomeDetails:{
        type:String,
        required: false
    },
    hourly:{
        type:String,
        required: false
    },
    employer:{
        type:String,
        required: false
    },
    privacyConsent:{
        type:String,
        required: false
    },
    emailConsent:{
        type:String,
        required: false
    },
    hourly:{
        type:String,
        required: false
    },
    hourly:{
        type:String,
        required: false
    },
    date:{
        type:Date,
        default: Date.now
    }
});


const Finance = mongoose.model('Finance',FinanceSchema);

module.exports = Finance;