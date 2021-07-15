const express = require('express');
const pgroutr = express.Router();
const {ensureAuthenticated} = require('../config/auth');



pgroutr.get('/', function(request, response){
    response.render('index');
})

// pgroutr.get('/:page', function(request, response){
//     response.render(request.params.page);
// })

pgroutr.get('/dashboard',ensureAuthenticated,(req,res)=>
    res.render('dashboard',{
    name:req.user.name,
    name:req.user.email
}));

pgroutr.get('/tulu',ensureAuthenticated,(req,res)=>
    res.render('tulu',{
    fName:req.user.toObject().fName,
    lName:req.user.toObject().lName,
    linkedin:req.user.toObject().linkedin,
    instagram:req.user.toObject().instagram,
    facebook:req.user.toObject().facebook,
    bio:req.user.toObject().bio,
    experience:req.user.toObject().experience,
    specialty:req.user.toObject().specialty,
    favoriteCar:req.user.toObject().favoriteCar,
    currentCar:req.user.toObject().currentCar,
    phoneNumber:req.user.toObject().phoneNumber,
    email:req.user.toObject().email,
    role:req.user.toObject().role
}));

pgroutr.get('/profile',ensureAuthenticated,(req,res)=>
    res.render('profile',{
        fName:req.user.toObject().fName,
        lName:req.user.toObject().lName,
        linkedin:req.user.toObject().linkedin,
        instagram:req.user.toObject().instagram,
        facebook:req.user.toObject().facebook,
        bio:req.user.toObject().bio,
        experience:req.user.toObject().experience,
        specialty:req.user.toObject().specialty,
        favoriteCar:req.user.toObject().favoriteCar,
        currentCar:req.user.toObject().currentCar,
        phoneNumber:req.user.toObject().phoneNumber,
        email:req.user.toObject().email,
        role:req.user.toObject().role
}));


module.exports = pgroutr;