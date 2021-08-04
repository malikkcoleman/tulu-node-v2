const express = require("express");
const pgroutr = express.Router();
const ROLE = require("../roles");
const { ensureAuthenticated, authRole } = require("../config/auth");

const Vehicle = require("../models/vehicleSchema");
const Dealer = require("../models/dealershipschema");
const User = require("../models/userSchema");
const Address = require("../models/addressschema");

pgroutr.get("/", (req, res) =>
  res.render("index", {
    user: req.user,
  })
);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    req.isLogged = true;
    return next();
  }
  res.redirect("/");
}

pgroutr.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    user: req.user,
  })
);

pgroutr.get("/tulu", ensureAuthenticated, authRole(ROLE.TULU), (req, res) =>
  res.render("tulu", {
    user: req.user,
  })
);

pgroutr.get("/profile", ensureAuthenticated, authRole(ROLE.USER), (req, res) =>
  res.render("profile", {
    user: req.user,
  })
);

pgroutr.get(
  "/dashboardsysadmin",
  ensureAuthenticated,
  authRole(ROLE.SYSADMIN),
  (req, res) =>
    res.render("dashboardsysadmin", {
      user: req.user,
    })
);

pgroutr.get("/shop", (req, res) => {
  Vehicle.find({})
    .then((vehicles) => {
      res.render("shop", {
        vehicles: vehicles,
        user: req.user,
      });
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});
pgroutr.get("/carview", (req, res) => {
  Vehicle.find({})
    .then((vehicles) => {
      Dealer.find({})
        .then((dealers) => {
          res.render("carview", {
            vehicles: vehicles,
            user: req.user,
            dealers: dealers,
          });
        })
        .catch((err) => {
          res.status(500).send(error);
        })
        .catch((err) => {
          res.status(500).send(error);
        });
    })
    .catch((err) => {
      res.status(500).send(error);
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});

pgroutr.get("/tululist", (req, res) => {
  User.find({ role: "tulu" })
    .then((tulu) => {
      res.render("tululist", {
        tulu: tulu,
        user: req.user,
      });
    })
    .catch((err) => {
      res.status(500).send(error);
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});

pgroutr.get("/:page", function (req, res) {
  res.render(req.params.page, {
    user: req.user,
  });
});

pgroutr.get('/DealerListing',(req,res)=>{
    Dealer.find({}).then((dealer)=>{
        Vehicle.find({}).then((vehicle)=>{
            res.render('DealerListing',{
                dealer:dealer,
                vehicle:vehicle,
                user:req.user
            })
        })
    }).catch((err)=>{
        res.status(500).send(error);
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});

pgroutr.get('/DealershipList',(req,res)=>{
    Dealer.find({}).then((dealer)=>{
        res.render('dealershipList',{
            dealer:dealer,
            user:req.user
        })
    }).catch((err)=>{
        res.status(500).send(error);
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});

pgroutr.get('/:page', function(req, res){
    res.render(req.params.page,{
        user:req.user
})});

module.exports = pgroutr;
