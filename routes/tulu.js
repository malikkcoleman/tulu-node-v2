const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {ensureAuthenticated, authRole} = require('../config/auth');

// User Model
const Tulu = require('../models/userschema');
const Address = require('../models/addressschema');

router.get("/viewTulu", (req, res) => {
    Tulu.find({role:"tulu"}).then((tulu) => {
        Address.find().then((address) => {
            res.render("viewTulu", {
            tulu: tulu,
            address: address,
            user:req.user
            });
        });
    });
});

module.exports = router;