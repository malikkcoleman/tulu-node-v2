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
const TestDrive = require("../models/testdriveschema");
const { decode } = require("punycode");
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tuluapps@gmail.com",
    pass: "Calgary1234",
  },
});


router.post("/testDrive", (req, res) => {
  const { fname, lname, email, phoneNumber, year, make,model,vinNumber,dealershipName,when} = req.body;


    const newTestDrive = new TestDrive({
        fname, lname, email, phoneNumber, year, make,model,vinNumber,dealershipName,when
    });
    console.log(newTestDrive);
    newTestDrive
      .save()
      .then((finance) => {
        console.log(finance.vinNumber)
        res.redirect("/CarView/"+finance.vinNumber)
      })
      .catch((err) => console.log(err));
  var mailOptions = {
    from: "tuluapps@gmail.com",
    to: "info@tulucanada.com",
    subject: "Tulu Canada Test Drive Application",
    text:
      "Customer Information \n" +
      "Full Name: " +
      req.body.fname +
      "Last Name" +
      req.body.lname +
      "\n" +
      "Phone Number: " +
      req.body.phoneNumber +
      "\n" +
      "Email Address: " +
      req.body.email +
      "\n\n" +
      "Year: " +
      req.body.year+
      "\n" +
      "Make: " +
      req.body.make+
      "\n" +
      "Model: " +
      req.body.model+
      "\n" +
      "When: " +
      req.body.when+
      "\n" +
      "Vin: " +
      req.body.vinNumber+
      "\n" +
      "Dealership: " +
      req.body.dealershipName
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Send: " + info.response);
    }
  });
});

module.exports = router;
