const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Dealer Model
const Dealer = require('../models/dealershipschema');

// Add Dealership Page
router.get('/dashboardSysAdminDealership',(req,res)=>
    res.render('dashboardSysAdminDealership',{
    user:req.user
}));

// Add Dealership Handle
router.post('/dashboardSysAdminDealership',(req,res)=>{
    console.log(req.body);
    // res.send('hello');
    const { name,logo,website} = req.body;

    let errors = [];

    // Check required fields
    if(!name||!logo||!website){
        errors.push({msg:'Please fill in all fields'});
    }


    if(errors.length > 0){
        res.render('dashboardSysAdminDealership',{
            errors,name,logo,website
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
                    errors,name,logo,website
                })
            }else{
                const newDealer = new Dealer({
                    errors,name,logo,website
                });

                newDealer.save()
                .then(dealer => {
                    req.flash('Adding New Dealer Success!');
                    res.redirect('/dealerships/dashboardSysAdminDealership')
                })
                .catch(err => console.log(err));
                // console.log(newUser)
                // res.send('hello');
            }
        });
    }
});

module.exports = router;