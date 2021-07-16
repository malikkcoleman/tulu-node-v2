const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// User Model
const User = require('../models/userSchema');

// Login Page
router.get('/login',(req,res)=>
    res.render('login',{
        user:req.user
}));


// Register Page
router.get('/register',(req,res)=>
    res.render('register',{
    user:req.user
}));

// Register Handle
router.post('/register',(req,res)=>{
    console.log(req.body);
    // res.send('hello');
    const { email,fName,lName,password,password2,linkedin,instagram,facebook,bio,experience,specialty,favoriteCar,currentCar,image,phoneNumber} = req.body;

    let errors = [];

    // Check required fields
    if(!email||!fName||!lName||!password||!password2||!linkedin||!instagram||!facebook||!bio||!experience||!specialty||!favoriteCar||!currentCar||!phoneNumber){
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
            errors,image,fName,lName,linkedin,instagram,facebook,bio,experience,specialty,favoriteCar,currentCar,phoneNumber, email, password, password2
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
                    errors,fName,lName,linkedin,instagram,facebook,bio,experience,specialty,favoriteCar,currentCar,phoneNumber, email, password, password2
                })
            }else{
                const newUser = new User({
                    fName,lName,linkedin,instagram,facebook,bio,experience,specialty,favoriteCar,currentCar,phoneNumber, email, password, password2
                });


                // Hash Password
                bcrypt.genSalt(10, (err, salt) =>bcrypt.hash(newUser.password, salt, (err,hash) =>{
                    if(err)throw err;
                    //Set password to hashed 
                    newUser.password = hash;
                    // Save User
                    newUser.save()
                    .then(user => {
                        req.flash('success_msg', 'You are now registered and can log in.');
                        res.redirect('/users/login')
                    })
                    .catch(err => console.log(err));
                }))

                // console.log(newUser)
                // res.send('hello');
            }
        });
    }
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
            res.redirect('/dealeradmin')
        }
        if (req.user.toObject().role === "sysadmin") {
            res.redirect('/sysadmin')
        }
    });

// Logout Handle
router.get('/logout',(req,res)=>{
    req.logout();
    req.flash('success_msg','You are logged out');
    res.redirect('/users/login');
});

module.exports = router;