const express = require("express");
const router = express.Router();
//const { ensureAuthenticated } = require("../config/auth");
const https = require("https");
const querystring = require("query-string");
const bodyParser = require("body-parser");
const middlewares = [bodyParser.urlencoded({ extended: true })];

router.post("/vinTest", (req, res) => {
  console.log(req.body.vin);
  console.log(res.body);
});

module.exports = router;
