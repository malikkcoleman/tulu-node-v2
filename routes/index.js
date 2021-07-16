const express = require('express');
const pgroutr = express.Router();
const ROLE = require('../roles');
const {ensureAuthenticated, authRole} = require('../config/auth');

const Vehicle = require('../models/vehicleSchema');
const User = require('../models/userSchema');

pgroutr.get('/',(req,res)=>
    res.render('index',{
    user:req.user
}));

pgroutr.get('/dashboard',ensureAuthenticated,(req,res)=>
    res.render('dashboard',{
    user:req.user.toObject()
}));

pgroutr.get('/tulu',ensureAuthenticated, authRole(ROLE.TULU),(req,res)=>
    res.render('tulu',{
    user:req.user.toObject()
}));

pgroutr.get('/profile',ensureAuthenticated, authRole(ROLE.USER),(req,res)=>
    res.render('profile',{
        user:req.user.toObject()
}));

pgroutr.get('/dashboardsysadmin',ensureAuthenticated, authRole(ROLE.SYSADMIN),(req,res)=>
    res.render('dashboardsysadmin',{
        user:req.user.toObject()
}));

pgroutr.get('/shop',(req,res)=>{
    Vehicle.find({}).then((vehicles)=>{
        res.render('shop',{
            vehicles:vehicles,
            user:req.user.toObject()
        })
    }).catch((err)=>{
        res.status(500).send(error);
    })
})
pgroutr.get('/carview',(req,res)=>{
    Vehicle.find({}).then((vehicles)=>{
        res.render('carview',{
            vehicles:vehicles,
            user:req.user.toObject()
        })
    }).catch((err)=>{
        res.status(500).send(error);
    })
})


pgroutr.get('/tululist',(req,res)=>{
    User.find({role:'tulu'}).then((tulu)=>{
        res.render('tululist',{
            tulu:tulu,
            user:req.user.toObject()
        })
    }).catch((err)=>{
        res.status(500).send(error);
    })
})


pgroutr.get('/:page', function(req, res){
    res.render(req.params.page,{
        user:req.user.toObject()
})});

module.exports = pgroutr;