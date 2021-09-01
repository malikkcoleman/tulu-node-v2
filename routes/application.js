const express = require("express");
const flash = require("connect-flash");
const router = express.Router();
//const { ensureAuthenticated } = require("../config/auth");
const https = require("https");
const querystring = require("query-string");
const bodyParser = require("body-parser");
const ROLE = require("../roles");
const { ensureAuthenticated, authRole } = require("../config/auth");
const middlewares = [bodyParser.urlencoded({ extended: true })];
const Applications = require("../models/applicationschema");
const { decode } = require("punycode");
const nodemailer = require("nodemailer");


router.post("/automotiveSales", (req, res) => {
    const { fullName, email, phoneNumber, yearsOfSales, amvic} = req.body;
  
    console.log(req.body);
  
    const newApplications = new Applications({
        fullName, email, phoneNumber, yearsOfSales, amvic
    });
    console.log(newApplications);
    newApplications
      .save()
      .then((appointment) => {
        console.log(appointment)
        res.redirect("/uploadResume/"+appointment._id)
      })
      .catch((err) => console.log(err));
  });
  
  module.exports = router;