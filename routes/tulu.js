const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {v4: uuidv4} = require('uuid');
const {ensureAuthenticated, authRole} = require('../config/auth');
var uuid = uuidv4();
var targetId = uuid;

// User Model
const Tulu = require('../models/userschema');
const User = require('../models/userschema');
const Address = require('../models/addressschema');

router.get("/viewTulu", (req, res) => {
    Tulu.find({role:"tulu"}).then((tulu) => {
        Address.find().then((address) => {
            res.render("viewTulu", {
            tulu: tulu,
            address: address,
            user:req.user
            });
        });
    });
});



// Login Page
router.get('/tuluLogin',(req,res)=>
    res.render('tuluLogin',{
        user: req.user
}));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
       req.isLogged = true
       return next();
    }
    res.redirect('/');
}


router.get('/tuluRegistration',(req,res)=>
    res.render('tuluRegistration',{
    user:req.user
}));

// Register Handle
router.post('/tuluRegistration',(req,res)=>{
    console.log(req.body);
    // res.send('hello');
    const { email,fName,lName,password,password2,linkedin,instagram,facebook,bio,experience,specialty,favoriteCar,currentCar,phoneNumber,street,city,province,postal,role,ratings,carsSold,status} = req.body;

    let errors = [];

    // Check required fields
    if(!email||!fName||!lName||!password||!password2||!bio||!experience||!specialty||!favoriteCar||!currentCar||!phoneNumber||!street||!city||!province||!postal||!ratings||!carsSold||!status){
        errors.push({msg:'Please fill in all fields'});
    }

    // Check passwords match
    if(password !== password2){
        errors.push({msg:'Passwords do not match'});
    }

    // Check pass length
    if(password.length < 6){
        errors.push({msg:'Password should be at least 6 characters'});
    }

    if(errors.length > 0){
        res.render('tuluRegistration',{
            errors,image,fName,lName,linkedin,instagram,facebook,bio,experience,specialty,favoriteCar,currentCar,phoneNumber, email, password, password2,street,city,province,postal,role,ratings,carsSold,status
        });
    }else{
        // res.send('Pass');

        // Validation Passed
        User.findOne({email:email})
        .then(user=>{
            if(user){
                // user Exist
                errors.push({msg:'Email already Exist'})
                res.render('tuluRegistration',{
                    errors,fName,lName,linkedin,instagram,facebook,bio,experience,specialty,favoriteCar,currentCar,phoneNumber, email, password, password2,street,city,province,postal,role,ratings,carsSold,status
                })
            }else{
                const newUser = new User({
                    uuid,fName,lName,linkedin,instagram,facebook,bio,experience,specialty,favoriteCar,currentCar,phoneNumber, email, password, password2,role,ratings,carsSold,status
                });

                const newAddress = new Address({
                    errors,targetId,street,city,province,postal
                });

                // Hash Password
                bcrypt.genSalt(10, (err, salt) =>bcrypt.hash(newUser.password, salt, (err,hash) =>{
                    if(err)throw err;
                    //Set password to hashed 
                    newUser.password = hash;
                    // Save User
                    newUser.save()
                    .then(user => {
                        newAddress.save()
                        .then(address=>{
                            req.flash('success_msg', 'You are now registered and can log in.');
                            res.redirect('/tulu/tuluLogin')
                        })
                    })
                    .catch(err => console.log(err));
                }))

                // console.log(newUser)
                // res.send('hello');
            }
        });
    }
});



router.get('/EditTulu',ensureAuthenticated,(req,res)=>
    Address.find({targetId:req.user.toObject().uuid})
    .then(address=>{
        res.render('EditTulu',{
            user:req.user,
            address:address
        })
    })
);

router.post('/EditTulu',(req,res)=>{
    var myquery = { _id: req.user.toObject()._id };
    var myqueryaddress = { _id: req.user.toObject()._id };
    const { email,fName,lName,phoneNumber,street,city,province,postal} = req.body;
    var newvalues = { 
        email: email,
        fName: fName,
        lName: lName,
        phoneNumber: phoneNumber
    };

    var newvaluesaddress = { 
        street: street,
        city: city,
        province: province,
        postal: postal,
    };
        User.updateOne(myquery, newvalues)
        .then(user=>{
            Address.updateOne(myqueryaddress, newvaluesaddress)
            .then(address=>{
                req.flash('success_msg', 'Changes Saved!');
                res.redirect('/tulu/EditTulu')  
            })
        })

        
});

module.exports = router;