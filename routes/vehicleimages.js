const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const VehicleImage = require("../models/vehicleimageschema")

// addvehicleiamge 
router.get("/addvehicleimage", (req, res) => {
    res.render("Addvehicleimage", {
      user: req.user,
    });
  });

router.post("/addvehicleimage", (req,res) => {
    console.log(req.body);
    const {
        target_id,
        vin,
        image,
        is_deleted,
        is_display_photo
      } = req.body;
    
      let errors = [];

      // Check required fields

      const newVehicleImage = new VehicleImage({
          target_id,
          vin,
          image,
          is_deleted,
          is_display_photo
      });
      newVehicleImage.save().then((vehicleimage) => {
          res.redirect("/");
      }).catch((err) => console.log(err));
      console.log(newVehicleImage);
});

  module.exports = router;