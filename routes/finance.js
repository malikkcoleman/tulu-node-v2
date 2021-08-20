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
const Finance = require("../models/financeschema");
const FinanceVehicle = require("../models/financeVehicle");
const { decode } = require("punycode");
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tuluapps@gmail.com",
    pass: "Calgary1234",
  },
});

router.get("/finance", (req, res) =>
  res.render("finance", {
    user: req.user,
  })
);

router.post("/finance", (req, res) => {
  const { fname, lname, email, number, condition, vehicleType,budget,trade,creditScore,employment,incomeDetails,hourly,employer,emailConsent,privacyConsent } = req.body;


    const newFinance = new Finance({
        fname, lname, email, number, condition, vehicleType,budget,trade,creditScore,employment,incomeDetails,hourly,employer,emailConsent,privacyConsent
    });
    console.log(newFinance);
    newFinance
      .save()
      .then((finance) => {
        res.redirect("Finance");
      })
      .catch((err) => console.log(err));
  var mailOptions = {
    from: "tuluapps@gmail.com",
    to: "info@tulucanada.com",
    subject: "Tulu Canada FInance Application",
    text:
      "Customer Information \n" +
      "Full Name: " +
      req.body.fname +
      "Last Name" +
      req.body.lname +
      "\n" +
      "Phone Number: " +
      req.body.number +
      "\n" +
      "Email Address: " +
      req.body.email +
      "\n\n" +
      "Condition: " +
      req.body.condition+
      "\n" +
      "Vehicle Type: " +
      req.body.vehicleType+
      "\n" +
      "Budget: " +
      req.body.budget+
      "\n" +
      "Trade: " +
      req.body.trade+
      "\n" +
      "Credit Score: " +
      req.body.creditScore+
      "\n" +
      "Employment: " +
      req.body.employment+
      "\n" +
      "Income Details: " +
      req.body.incomeDetails+
      "\n" +
      "Hourly: " +
      req.body.hourly+
      "\n" +
      "Employer:" +
      req.body.employer+
      "\n" +
      "Email Consent:" +
      req.body.emailConsent+
      "\n" +
      "Privacy Consent:" +
      req.body.privacyConsent
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Send: " + info.response);
    }
  });
});


router.post("/financeVehicle", (req, res) => {
  const { fname, lname, email, phoneNumber, year, make,model,vinNumber,dealershipName,when} = req.body;


    const newFinanceVehicle = new FinanceVehicle({
        fname, lname, email, phoneNumber, year, make,model,vinNumber,dealershipName,when
    });
    console.log(newFinanceVehicle);
    newFinanceVehicle
      .save()
      .then((finance) => {
        console.log(finance.vinNumber)
        res.redirect("/carview/"+finance.vinNumber)
      })
      .catch((err) => console.log(err));
  var mailOptions = {
    from: "tuluapps@gmail.com",
    to: "info@tulucanada.com",
    subject: "Tulu Canada FInance Vehicle Application",
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

  // transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Email Send: " + info.response);
  //   }
  // });
});

module.exports = router;
