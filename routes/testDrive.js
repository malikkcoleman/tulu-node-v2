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
  const { fnameTestDrive, lnameTestDrive, emailTestDrive, phoneNumberTestDrive, yearTestDrive, makeTestDrive,modelTestDrive,vinNumberTestDrive,dealershipNameTestDrive,whenTestDrive} = req.body;


    const newTestDrive = new TestDrive({
        fnameTestDrive, lnameTestDrive, emailTestDrive, phoneNumberTestDrive, yearTestDrive, makeTestDrive,modelTestDrive,vinNumberTestDrive,dealershipNameTestDrive,whenTestDrive
    });
    console.log(newTestDrive);
    newTestDrive
      .save()
      .then((finance) => {
        console.log(finance.vinNumberTestDrive)
        res.redirect("/CarView/"+finance.vinNumberTestDrive)
      })
      .catch((err) => console.log(err));
  var mailOptions = {
    from: "tuluapps@gmail.com",
    to: "info@tulucanada.com",
    subject: "Tulu Canada Test Drive Application",
    text:
      "Customer Information \n" +
      "Full Name: " +
      req.body.fnameTestDrive +
      "Last Name" +
      req.body.lnameTestDrive +
      "\n" +
      "Phone Number: " +
      req.body.phoneNumberTestDrive +
      "\n" +
      "Email Address: " +
      req.body.emailTestDrive +
      "\n\n" +
      "Year: " +
      req.body.yearTestDrive+
      "\n" +
      "Make: " +
      req.body.makeTestDrive+
      "\n" +
      "Model: " +
      req.body.modelTestDrive+
      "\n" +
      "When: " +
      req.body.whenTestDrive+
      "\n" +
      "Vin: " +
      req.body.vinNumberTestDrive+
      "\n" +
      "Dealership: " +
      req.body.dealershipNameTestDrive
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
