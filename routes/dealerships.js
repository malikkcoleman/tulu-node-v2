const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {v4: uuidv4} = require('uuid');

var uuid = uuidv4();
var targetId = uuid;

// Dealer Model
const Dealer = require('../models/dealershipschema');
const Address = require('../models/addressschema');

// Add Dealership Page
router.get('/dashboardSysAdminDealership',(req,res)=>
    res.render('dashboardSysAdminDealership',{
    user:req.user
}));

// Add Dealership Handle
router.post('/dashboardSysAdminDealership',(req,res)=>{
    console.log(req.body);
    // res.send('hello');
    const { name,logo,website,street,city,province,postal} = req.body;

    let errors = [];

    // Check required fields
    if(!name||!logo||!website||!street||!city||!province||!postal){
        errors.push({msg:'Please fill in all fields'});
    }


    if(errors.length > 0){
        res.render('dashboardSysAdminDealership',{
            errors,name,logo,website,street,city,province,postal
        });
    }else{
        // res.send('Pass');

        // Validation Passed
        Dealer.findOne({website:website})
        .then(dealer=>{
            if(dealer){
                // dealerExist Exist
                errors.push({msg:'Email already Exist'})
                res.render('dashboardSysAdminDealership',{
                    errors,name,logo,website,street,city,province,postal
                })
            }else{
                const newDealer = new Dealer({
                    errors,uuid,name,logo,website
                });
                const newAddress = new Address({
                    errors,targetId,street,city,province,postal
                });
                
                newDealer.save()
                .then(dealer => {
                    newAddress.save()
                    .then(address=>{
                        req.flash('Adding New Dealer Success!');
                        res.redirect('/dealerships/dashboardSysAdminDealership')
                    })
                    .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
                // console.log(newUser)
                // res.send('hello');
            }
        });
    }
});

module.exports = router;