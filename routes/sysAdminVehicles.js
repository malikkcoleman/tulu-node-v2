const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const VehicleController = require("../controllers/vehicle.controller");
// Vehicle Model
const Vehicle = require("../models/vehicleSchema");
const Dealer = require("../models/dealershipschema");

// addvehicle Page
router.get("/DashboardSysAdminVehicle", (req, res) => {
  Dealer.find({}).then((dealers)=>{
    res.render('DashboardSysAdminVehicle',{
        dealers:dealers,
        user:req.user
    })
  }).catch((err)=>{
      res.status(500).send(error);
  })
  .catch((err) => {
    res.status(500).send(error);
  });
});

//controller methods

router.get("/", VehicleController.GetVehicles);
//router.post("/", VehicleController.CreateVehicle);

// addvehicle Handle
router.post("/DashboardSysAdminVehicle", (req, res) => {
  console.log(req.body);
  // res.send('hello');
  const {
    targetId,
    vin,
    year,
    make,
    model,
    mileage,
    vehicleType,
    trim,
    isSold,
    doors,
    modelNumber,
    driveType,
    msrp,
    minPrice,
    maxPrice,
    refFee,
    engineName,
    engineBrand,
    engineID,
    fuelType,
    iceMaxHp,
    iceMaxTorque,
    maxPayLoad,
    transmissionName,
    colorName,
    colorHex,
    baseTowingCapacity,
    grossWeight,
    fuelTankCapacity,
    notes,
  } = req.body;

  let errors = [];

  // Check required fields
  if (
    targetId == "" ||
    !vin ||
    !year ||
    !make ||
    !model ||
    !mileage||
    !vehicleType ||
    !trim ||
    !isSold ||
    !doors ||
    !modelNumber ||
    !driveType ||
    !msrp ||
    !minPrice ||
    !maxPrice ||
    !refFee ||
    !engineName ||
    !engineBrand ||
    !engineID ||
    !fuelType ||
    !iceMaxHp ||
    !iceMaxTorque ||
    !maxPayLoad ||
    !transmissionName ||
    !colorName ||
    !colorHex ||
    !baseTowingCapacity ||
    !grossWeight ||
    !fuelTankCapacity ||
    !notes
  ) {
    errors.push({ msg: "Please fill in all fields" });
  }

  if (errors.length > 0) {
    res.render("DashboardSysAdminVehicle", {
      errors,
      vin,
      year,
      make,
      model,
      mileage,
      vehicleType,
      trim,
      isSold,
      doors,
      modelNumber,
      driveType,
      msrp,
      minPrice,
      maxPrice,
      refFee,
      engineName,
      engineBrand,
      engineID,
      fuelType,
      iceMaxHp,
      iceMaxTorque,
      maxPayLoad,
      transmissionName,
      colorName,
      colorHex,
      baseTowingCapacity,
      grossWeight,
      fuelTankCapacity,
      notes,
    });
  } else {
    // res.send('Pass');

    // Validation Passed
    //make sure if the vehicle is existing or not
    Vehicle.findOne({ vin: vin }).then((vehicle) => {
      if (vehicle) {
        // vehicle Exist
        errors.push({ msg: "Vehicle already Exist" });
        res.render("DashboardSysAdminVehicle", {
          errors,
          targetId,
          vin,
          year,
          make,
          model,
          mileage,
          vehicleType,
          trim,
          isSold,
          doors,
          modelNumber,
          driveType,
          msrp,
          minPrice,
          maxPrice,
          refFee,
          engineName,
          engineBrand,
          engineID,
          fuelType,
          iceMaxHp,
          iceMaxTorque,
          maxPayLoad,
          transmissionName,
          colorName,
          colorHex,
          baseTowingCapacity,
          grossWeight,
          fuelTankCapacity,
          notes,
        });
      } else {
        const newVehicle = new Vehicle({
          targetId,
          vin,
          year,
          make,
          model,
          mileage,
          vehicleType,
          trim,
          isSold,
          doors,
          modelNumber,
          driveType,
          msrp,
          minPrice,
          maxPrice,
          refFee,
          engineName,
          engineBrand,
          engineID,
          fuelType,
          iceMaxHp,
          iceMaxTorque,
          maxPayLoad,
          transmissionName,
          colorName,
          colorHex,
          baseTowingCapacity,
          grossWeight,
          fuelTankCapacity,
          notes,
        });

        newVehicle
          .save()
          .then((vehicle) => {
            req.flash('success_msg', 'Vehicle Added.');
            res.redirect("/sysadminvehicles/DashboardSysAdminVehicle");
          })
          .catch((err) => console.log(err));

        console.log(newVehicle);
        // res.send('hello');
      }
    });
  }
});

/* router.get("/", function (req, res) {
  vinn = req.flash("vin");
  console.log(vinn);
  res.render("/vehicles", { vin: vin });
}); */

module.exports = router;
