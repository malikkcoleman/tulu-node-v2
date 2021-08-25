const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const VehicleController = require("../controllers/vehicle.controller");
const fetchImage = require("../middleware/getImages");
const Image = require("../models/imageschema");
// Vehicle Model
const Vehicle = require("../models/vehicleschema");
const Dealer = require('../models/dealershipschema');

// addvehicle Page
router.get("/addvehicle", (req, res) => {
  res.render("Addvehicle", {
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
    status
  } = req.body;

  let errors = [];

  // Check required fields
  
    
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
        status
      });
      newVehicle
        .save()
        .then((vehicle) => {
          // req.flash('success_msg', 'You are now registered and can log in.');
          res.redirect("/");
        })
        .catch((err) => console.log(err));
      console.log(newVehicle);
      // res.send('hello');
});



router.get("/DashboardSysAdminAddVehicle", (req, res) => {
  Dealer.find()
  .then(dealer=>{
    res.render('DashboardSysAdminAddVehicle',{
      vin:req.body.vin, 
      infoData:infoData,
      user:req.user,
      dealer:dealer
    })
  })
});


    


// SysAdmin Add Vehicle
router.post("/DashboardSysAdminAddVehicle", (req, res) => {
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
    status
  } = req.body;

  let errors = [];
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
          status
        });

        newVehicle
          .save()
          .then((vehicle) => {
            // req.flash('success_msg', 'You are now registered and can log in.');
            res.redirect("/sysadminvehicles/DashboardSysAdminVehicle");
          })
          .catch((err) => console.log(err));

        console.log(newVehicle);
        // res.send('hello');
});





// SysAdmin Add Vehicle
router.post("/FuckingVinDoesntWork", (req, res) => {
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
    status
  } = req.body;

  let errors = [];
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
          status
        });

        newVehicle
          .save()
          .then((vehicle) => {
            // req.flash('success_msg', 'You are now registered and can log in.');
            res.redirect("/sysadminvehicles/DashboardSysAdminVehicle");
          })
          .catch((err) => console.log(err));

        console.log(newVehicle);
        // res.send('hello');
});




// Dashboard Vehicle
router.get("/DashboardVehicle", (req, res) => {
  console.log(req.user)
  Vehicle.find({dealerId:req.user.toObject().dealerId}).then((vehicle) => {
    res.render("DashboardVehicle", {  
      user: req.user,
      vehicles: vehicle,
    });
  });
});

// EDIT VEHICLE
router.get("/editvehicle/:vin", (req, res) => {
  Vehicle.find({vin: req.params.vin}).then( async (vehicle) => {
    const images = await fetchImage.getImagesArray(req.params.vin)
    res.render("EditVehicle", {
      user: req.user,
      vehicles: vehicle,
      images: images
    });
  });
});

router.post("/makedisplayphoto/:fileid/:vin", (req, res) =>{
  Image.updateMany({target_id: req.params.vin}, {is_display_photo: false}).then(function(data){
    Image.updateOne({_id: req.params.fileid},{is_display_photo: true}).then(function(data){
      res.send({data: data})
    })
  })
})


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
    status
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
    status:status
  };
  Vehicle.updateOne(myquery, newvalues).then((user) => {
    req.flash("success_msg", "Changes Saved!");
    res.redirect("back");
  });
});

router.get("/deleteVehicles/:vin", (req, res) => {
  Vehicle.deleteOne({vin: req.params.vin}).then( async (vehicle) => {
    res.redirect("back");
  });
});


module.exports = router;
