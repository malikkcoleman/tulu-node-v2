const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const VehicleController = require("../controllers/vehicle.controller");
// Vehicle Model
const Vehicle = require("../models/vehicleSchema");

// addvehicle Page
router.get("/addvehicle", (req, res) => {
  res.render("addvehicle", {
    user: req.user,
  });
});

//controller methods

router.get("/malik", VehicleController.GetVehicles);
router.post("/coleman", VehicleController.addVehicle);
//router.post("/addVehicle", addVehicle);

// addvehicle Handle
router.post("/addvehicle", (req, res) => {
  console.log(req.body);
  // res.send('hello');
  const {
    vin,
    year,
    make,
    model,
    vehicleType,
    trim,
    dealerId,
    isSold,
    doors,
    mileage,
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
    !vin ||
    !year ||
    !make ||
    !model ||
    !vehicleType ||
    !trim ||
    !dealerId ||
    !isSold ||
    !doors ||
    !mileage ||
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
    res.render("addvehicle", {
      errors,
      vin,
      year,
      make,
      model,
      vehicleType,
      trim,
      dealerId,
      isSold,
      doors,
      mileage,
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
      user: req.user,
    });
  } else {
    // res.send('Pass');

    // Validation Passed
    //make sure if the vehicle is existing or not
    Vehicle.findOne({ vin: vin }).then((vehicle) => {
      if (vehicle) {
        // vehicle Exist
        errors.push({ msg: "Vehicle already Exist" });
        res.render("addvehicle", {
          errors,
          vin,
          year,
          make,
          model,
          vehicleType,
          trim,
          dealerId,
          isSold,
          doors,
          mileage,
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
          user: req.user,
        });
      } else {
        const newVehicle = new Vehicle({
          vin,
          year,
          make,
          model,
          vehicleType,
          trim,
          dealerId,
          isSold,
          doors,
          mileage,
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
            // req.flash('success_msg', 'You are now registered and can log in.');
            res.redirect("/");
          })
          .catch((err) => console.log(err));

        console.log(newUser);
        // res.send('hello');
      }
    });
  }
});

// Dashboard Vehicle
router.get("/dashboardVehicle", (req, res) => {
  Vehicle.find().then((vehicle) => {
    res.render("dashboardVehicle", {
      user: req.user,
      vehicles: vehicle,
    });
  });
});

// EDIT VEHICLE
router.get("/editvehicle", (req, res) => {
  Vehicle.find().then((vehicle) => {
    res.render("editvehicle", {
      user: req.user,
      vehicles: vehicle,
    });
  });
});

router.post("/editvehicle", (req, res) => {
  const {
    vin,
    year,
    make,
    model,
    vehicleType,
    trim,
    doors,
    mileage,
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
    transmissionName,
    colorName,
    colorHex,
    baseTowingCapacity,
    grossWeight,
    fuelTankCapacity,
  } = req.body;
  var myquery = { vin: vin };
  var newvalues = {
    vin: vin,
    year: year,
    make: make,
    model: model,
    vehicleType: vehicleType,
    trim: trim,
    doors: doors,
    mileage: mileage,
    modelNumber: modelNumber,
    driveType: driveType,
    msrp: msrp,
    minPrice: minPrice,
    maxPrice: maxPrice,
    refFee: refFee,
    engineName: engineName,
    engineBrand: engineBrand,
    engineID: engineID,
    fuelType: fuelType,
    iceMaxHp: iceMaxHp,
    iceMaxTorque: iceMaxTorque,
    transmissionName: transmissionName,
    colorName: colorName,
    colorHex: colorHex,
    baseTowingCapacity: baseTowingCapacity,
    grossWeight: grossWeight,
    fuelTankCapacity: fuelTankCapacity,
  };
  Vehicle.updateOne(myquery, newvalues).then((user) => {
    req.flash("success_msg", "Changes Saved!");
    res.redirect("back");
  });
});

module.exports = router;
