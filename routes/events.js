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
const Event = require("../models/eventschema");
const { decode } = require("punycode");
const nodemailer = require("nodemailer");



router.post("/AddEvents", (req, res) => {
  const { eventName, date, description } = req.body;
  console.log(req.body);

  const newEvent = new Event({
    eventName, date, description 
  });

  console.log(newEvent);
  
  newEvent.save()
  .then((event) => {
    console.log(event)
    res.redirect("/UploadEvent/"+event._id)
  })
  .catch((err) => console.log(err));
});


router.get("/delete/:targetId", (req, res) => {
  Event.deleteOne({_id: req.params.targetId}).then( async (result) => {
    res.redirect('/EventList')
  });
});

module.exports = router;
