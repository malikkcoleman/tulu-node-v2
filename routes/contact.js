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
const vehicle = require("../models/vehicleschema");
const { decode } = require("punycode");
const nodemailer = require("nodemailer");
const Appointment = require("../models/appointmentschema");
const Dealer = require("../models/dealershipschema");
const User = require("../models/userschema");
const BuyNow = require("../models/buynowschema");
const Contact = require("../models/contactschema");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tuluapps@gmail.com",
    pass: "Calgary1234",
  },
});

router.post("/email", (req, res) => {
  //console.log("Phone Number: " + req.body.phonenumber + ".");
  const { firstName, lastName, phoneNumber, email, message } = req.body;

  let errors = [];

  //Check required fields

  if (!firstName || !lastName || !phoneNumber || !email || !message) {
    errors.push({ msg: "Please fill in all fields" });
  }

  if (errors.length > 0) {
    res.render("Contact", {
      user: req.user,
      errors,
      firstName,
      lastName,
      phoneNumber,
      email,
      message,
    });
  } else {
    const newContact = new Contact({
      firstName,
      lastName,
      phoneNumber,
      email,
      message,
    });
    console.log(newContact);
    newContact
      .save()
      .then((contaact) => {
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  }
  var mailOptions = {
    from: "tuluapps@gmail.com",
    to: "info@tulucanada.com",
    subject: "Tulu Canada Application QUESTION",
    text:
      "Customer Information \n" +
      "Full Name: " +
      req.body.firstName +
      " " +
      req.body.lastName +
      "\n" +
      "Phone Number: " +
      req.body.phoneNumber +
      "\n" +
      "Email Address: " +
      req.body.email +
      "\n\n" +
      "Question: \n" +
      req.body.message,
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
