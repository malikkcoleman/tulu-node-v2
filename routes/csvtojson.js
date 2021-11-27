const express = require("express");
const pgroutr = express.Router();
const ROLE = require("../roles");
const { ensureAuthenticated, authRole } = require("../config/auth");


const CSVToJSON = require('csvtojson');

CSVToJSON().fromFile('./public/csv/test/users.csv')
.then(users => {
    // users is a JSON array
    // log the JSON array
    console.log(users);
}).catch(err => {
    // log error if any
    console.log(err);
});


