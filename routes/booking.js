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

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tuluapps@gmail.com",
    pass: "Calgary1234",
  },
});

router.get("/booking/:vin", (req, res) =>
  vehicle.find({vin:req.params.vin})
    .then((vehicles) => {
      Dealer.find({uuid:vehicles[0].dealerId})
      .then((dealer) => {
        User.find({role:"tulu"})
        .then((tulus) => {
          res.render("Booking", {
            vehicles: vehicles,
            tulus: tulus,
            dealer: dealer,
            user: req.user,
          })
        })
      })
    })
    .catch((err) => {
      res.status(500).send(err);
    })
);

router.post("/email", (req, res) => {
  //console.log("Phone Number: " + req.body.phonenumber + ".");
  const {
    dealerId,
    userId,
    tuluId,
    vin,
    vehiclePrice,
    customer,
    phonenumber,
    email,
    street,
    city,
    province,
    postalcode,
    notes,
    preferred,
    alternate,
  } = req.body;

  console.log(req.body);

  let errors = [];

  //Check required fields

  if (
    !dealerId ||
    !userId ||
    !vin ||
    !vehiclePrice ||
    !customer ||
    !phonenumber ||
    !email ||
    !street ||
    !city ||
    !province ||
    !postalcode ||
    !notes ||
    !preferred ||
    !alternate
  ) {
    errors.push({ msg: "Please fill in all fields" });
  }

  if (errors.length > 0) {
    res.render("BookingTest", {
      user: req.user,
      errors,
      phonenumber,
      email,
      street,
      city,
      province,
      postalcode,
      notes,
      preferred,
      alternate,
    });
  } else {
    const newAppointment = new Appointment({
      dealerId,
      userId,
      tuluId,
      vin,
      vehiclePrice,
      customer,
      phonenumber,
      email,
      street,
      city,
      province,
      postalcode,
      notes,
      preferred,
      alternate,
    });
    console.log(newAppointment);
    newAppointment
      .save()
      .then((appointment) => {
        res.redirect("/");
      })
      .catch((err) => console.log(err));

    console.log(newAppointment);
  }
  var mailOptions = {
    from: "tuluapps@gmail.com",
    to: "info@tulucanada.com",
    subject: "Tulu Canada Application Test Drive Appointment Request",
    text:
      "Customer Information \n" +
      "Full Name: " +
      req.body.customer +
      "\n" +
      "Phone Number: " +
      req.body.phonenumber +
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
      req.body.postalcode +
      "\n" +
      "Notes: \n" +
      req.body.notes +
      "\n\n" +
      "Tulu Information \n" +
      "Tulu: " +
      req.body.tulu +
      "\n\n" +
      "Dealership Information \n" +
      "Dealership: " +
      req.body.dealership +
      "\n" +
      "Vehicle: " +
      req.body.vehicle +
      "\n"+
      "Vin: " +
      req.body.vin +
      "\n",
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
