const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {v4: uuidv4} = require('uuid');
const {ensureAuthenticated, authRole} = require('../config/auth');
var uuid = uuidv4();
var targetId = uuid;

// User Model
const User = require('../models/userschema');
const Address = require('../models/addressschema');

// Login Page
router.get('/login',(req,res)=>
    res.render('login',{
        user: req.user
}));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
       req.isLogged = true
       return next();
    }
    res.redirect('/');
}


// Register Page
router.get('/register',(req,res)=>
    res.render('register',{
    user:req.user
}));

// Register Handle
router.post('/register',(req,res)=>{
    console.log(req.body);
    // res.send('hello');
    const { email,fName,lName,password,password2,phoneNumber,street,city,province,postal,role} = req.body;

    let errors = [];

    // Check required fields
    if(!email||!fName||!lName||!password||!password2||!phoneNumber||!street||!city||!province||!postal||!role){
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
        res.render('register',{
            errors,fName,lName,phoneNumber, email, password, password2,street,city,province,postal,role
        });
    }else{
        // res.send('Pass');

        // Validation Passed
        User.findOne({email:email})
        .then(user=>{
            if(user){
                // user Exist
                errors.push({msg:'Email already Exist'})
                res.render('register',{
                    errors,fName,lName,phoneNumber, email, password, password2,street,city,province,postal,role
                })
            }else{
                const newUser = new User({
                    uuid,fName,lName,phoneNumber, email, password, password2,role
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
                            res.redirect('/users/login')
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

router.get('/addUser',(req,res)=>
    res.render('AddUser',{
    user:req.user
}));

router.post('/addUser',(req,res)=>{
    console.log(req.body);
    // res.send('hello');
    const { email,fName,lName,password,password2,phoneNumber,street,city,province,postal} = req.body;

    let errors = [];

    // Check required fields
    if(!email||!fName||!lName||!password||!password2||!phoneNumber||!street||!city||!province||!postal){
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
        res.render('AddUser',{
            errors,fName,lName,phoneNumber, email, password, password2,street,city,province,postal
        });
    }else{
        // res.send('Pass');

        // Validation Passed
        User.findOne({email:email})
        .then(user=>{
            if(user){
                // user Exist
                errors.push({msg:'Email already Exist'})
                res.render('AddUser',{
                    errors,fName,lName,phoneNumber, email, password, password2
                })
            }else{
                const newUser = new User({
                    uuid,fName,lName,phoneNumber, email, password, password2
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
                            res.redirect('/DashboardSysAdminUser')
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

router.get('/editProfile',ensureAuthenticated,(req,res)=>
    Address.find({targetId:req.user.toObject().uuid})
    .then(address=>{
        res.render('EditProfile',{
            user:req.user,
            address:address
        })
    })
);

router.post('/editProfile',(req,res)=>{
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
                res.redirect('/users/editProfile')  
            })
        })

        
});


router.get('/DashboardSysAdminEditUser',ensureAuthenticated,(req,res)=>
    User.find()
    .then(users=>{
        res.render('DashboardSysAdminEditUser',{
            users:users,
            user:req.user
        })
    })
);

router.post('/DashboardSysAdminEditUser',(req,res)=>{
    
    const { selectedId,email,fName,lName,phoneNumber} = req.body;
    var newvalues = { 
        email: email,
        fName: fName,
        lName: lName,
        phoneNumber: phoneNumber,
    };
        User.updateOne({_id:selectedId}, newvalues)
        .then(user=>{
            req.flash('success_msg', 'Changes Saved!');
            res.redirect('/DashboardSysAdminUser')  
        })
});


router.get('/DashboardSysAdminEditTulu',ensureAuthenticated,(req,res)=>
    User.find()
    .then(users=>{
        res.render('DashboardSysAdminEditTulu',{
            users:users,
            user:req.user
        })
    })
);

router.post('/DashboardSysAdminEditTulu',(req,res)=>{
    const { selectedId,email,fName,lName,phoneNumber,role} = req.body;
    var newvalues = { 
        email: email,
        fName: fName,
        lName: lName,
        phoneNumber: phoneNumber
    };
        User.updateOne({_id:selectedId}, newvalues)
        .then(user=>{
            req.flash('success_msg', 'Changes Saved!');
            res.redirect('/DashboardSysAdminTulu')  
        })
});


// Login Handle
router.post(
    '/login',
    passport.authenticate('local', {
      failureRedirect: '/login'
    }), (req, res) => {
        console.log(req.user.toObject().role)
        if (req.user.toObject().role === "user") {
            res.redirect('/profile')
        }
        if (req.user.toObject().role === "tulu") {
            res.redirect('/tulu')   
        }
        if (req.user.toObject().role === "dealeradmin") {
            res.redirect('/dashboard')
        }
        if (req.user.toObject().role === "sysadmin") {
            res.redirect('/dashboardsysadmin')
        }
    });

// Logout Handle
router.get('/logout',(req,res)=>{
    req.logout();
    req.flash('success_msg','You are logged out');
    res.redirect('/users/login');
});

module.exports = router;