const express = require('express');
const pgroutr = express.Router();
const {ensureAuthenticated} = require('../config/auth');

const Vehicle = require('../models/vehicleSchema');
const User = require('../models/userSchema');

pgroutr.get('/',(req,res)=>
    res.render('index',{
    role:''
}));

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

pgroutr.get('/dashboardsysadmin',ensureAuthenticated,(req,res)=>
    res.render('dashboardsysadmin',{
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

pgroutr.get('/shop',(req,res)=>{
    Vehicle.find({}).then((vehicles)=>{
        res.render('shop',{
            vehicles:vehicles,
            role:''
        })
    }).catch((err)=>{
        res.status(500).send(error);
    })
})


pgroutr.get('/tululist',(req,res)=>{
    User.find({role:'tulu'}).then((tulu)=>{
        res.render('tululist',{
            tulu:tulu,
            role:''
        })
    }).catch((err)=>{
        res.status(500).send(error);
    })
})


pgroutr.get('/:page', function(req, res){
    res.render(req.params.page,{
        role:''
})});

module.exports = pgroutr;