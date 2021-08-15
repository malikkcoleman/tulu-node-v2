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

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tuluapps@gmail.com",
    pass: "Calgary1234",
  },
});

router.post("/email", (req, res) => {
  //console.log("Phone Number: " + req.body.phonenumber + ".");
  const {
    targetId,
    vin,
    vehicle,
    firstName,
    lastName,
    phoneNumber,
    email,
    street,
    city,
    province,
    postal,
  } = req.body;

  let errors = [];

  //Check required fields

  if (
    !targetId ||
    !vin ||
    !vehicle ||
    !firstName ||
    !lastName ||
    !phoneNumber ||
    !email ||
    !street ||
    !city ||
    !province ||
    !postal
  ) {
    errors.push({ msg: "Please fill in all fields" });
  }

  if (errors.length > 0) {
    res.render("BuyNow", {
      user: req.user,
      errors,
      firstName,
      lastName,
      phoneNumber,
      email,
      street,
      city,
      province,
      postal,
    });
  } else {
    const newBuyNow = new BuyNow({
      targetId,
      vin,
      vehicle,
      firstName,
      lastName,
      phoneNumber,
      email,
      street,
      city,
      province,
      postal,
    });
    console.log(newBuyNow);
    newBuyNow
      .save()
      .then((buynow) => {
        res.redirect("/");
      })
      .catch((err) => console.log(err));

    console.log(newBuyNow);
  }
  var mailOptions = {
    from: "tuluapps@gmail.com",
    to: "info@tulucanada.com",
    subject: "Tulu Canada Application (LEAD) Buy Now Request",
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
      "\n" +
      "Street: " +
      req.body.street +
      "\n" +
      "City: " +
      req.body.city +
      "\n" +
      "Province: " +
      req.body.province +
      "\n" +
      "Postal Code: " +
      req.body.postal +
      "\n\n" +
      "Dealership Information \n" +
      "Dealership: " +
      req.body.dealership +
      "\n" +
      "Vehicle: " +
      req.body.vehicle +
      "\n" +
      "Vin: " +
      req.body.vin,
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
