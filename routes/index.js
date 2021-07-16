const express = require("express");
const pgroutr = express.Router();
<<<<<<< Updated upstream
const ROLE = require('../roles');
const {ensureAuthenticated, authRole} = require('../config/auth');
=======
const { ensureAuthenticated } = require("../config/auth");
>>>>>>> Stashed changes

const Vehicle = require("../models/vehicleSchema");
const User = require("../models/userSchema");

<<<<<<< Updated upstream
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
=======
pgroutr.get("/", (req, res) =>
  res.render("index", {
    role: "guest",
  })
);

pgroutr.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    name: req.user.name,
    name: req.user.email,
  })
);

pgroutr.get("/tulu", ensureAuthenticated, (req, res) =>
  res.render("tulu", {
    fName: req.user.toObject().fName,
    lName: req.user.toObject().lName,
    linkedin: req.user.toObject().linkedin,
    instagram: req.user.toObject().instagram,
    facebook: req.user.toObject().facebook,
    bio: req.user.toObject().bio,
    experience: req.user.toObject().experience,
    specialty: req.user.toObject().specialty,
    favoriteCar: req.user.toObject().favoriteCar,
    currentCar: req.user.toObject().currentCar,
    phoneNumber: req.user.toObject().phoneNumber,
    email: req.user.toObject().email,
    role: req.user.toObject().role,
  })
);

pgroutr.get("/profile", ensureAuthenticated, (req, res) =>
  res.render("profile", {
    fName: req.user.toObject().fName,
    lName: req.user.toObject().lName,
    linkedin: req.user.toObject().linkedin,
    instagram: req.user.toObject().instagram,
    facebook: req.user.toObject().facebook,
    bio: req.user.toObject().bio,
    experience: req.user.toObject().experience,
    specialty: req.user.toObject().specialty,
    favoriteCar: req.user.toObject().favoriteCar,
    currentCar: req.user.toObject().currentCar,
    phoneNumber: req.user.toObject().phoneNumber,
    email: req.user.toObject().email,
    role: req.user.toObject().role,
  })
);

pgroutr.get("/dashboardsysadmin", ensureAuthenticated, (req, res) =>
  res.render("dashboardsysadmin", {
    fName: req.user.toObject().fName,
    lName: req.user.toObject().lName,
    linkedin: req.user.toObject().linkedin,
    instagram: req.user.toObject().instagram,
    facebook: req.user.toObject().facebook,
    bio: req.user.toObject().bio,
    experience: req.user.toObject().experience,
    specialty: req.user.toObject().specialty,
    favoriteCar: req.user.toObject().favoriteCar,
    currentCar: req.user.toObject().currentCar,
    phoneNumber: req.user.toObject().phoneNumber,
    email: req.user.toObject().email,
    role: req.user.toObject().role,
  })
);

pgroutr.get("/shop", (req, res) => {
  Vehicle.find({})
    .then((vehicles) => {
      res.render("shop", {
        vehicles: vehicles,
        role: "guest",
      });
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});
pgroutr.get("/carview", (req, res) => {
  Vehicle.find({})
    .then((vehicles) => {
      res.render("carview", {
        vehicles: vehicles,
        role: "guest",
      });
>>>>>>> Stashed changes
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});

<<<<<<< Updated upstream

pgroutr.get('/tululist',(req,res)=>{
    User.find({role:'tulu'}).then((tulu)=>{
        res.render('tululist',{
            tulu:tulu,
            user:req.user.toObject()
        })
    }).catch((err)=>{
        res.status(500).send(error);
=======
pgroutr.get("/tululist", (req, res) => {
  User.find({ role: "tulu" })
    .then((tulu) => {
      res.render("tululist", {
        tulu: tulu,
        role: "guest",
      });
>>>>>>> Stashed changes
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});

<<<<<<< Updated upstream
pgroutr.get('/:page', function(req, res){
    res.render(req.params.page,{
        user:req.user.toObject()
})});
=======
pgroutr.get("/:page", function (req, res) {
  res.render(req.params.page, {
    role: "guest",
  });
});
>>>>>>> Stashed changes

module.exports = pgroutr;
