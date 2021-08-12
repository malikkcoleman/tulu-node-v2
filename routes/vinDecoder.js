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
const Dealer = require('../models/dealershipschema');
const { decode } = require("punycode");
const tempVehicle = new vehicle();

const access_key_id = "PnuvF35in4";
const secret_access_key = "JIO13VOxL2u6FE1czz5tYGkPx8eRYyXZrpRimprI";

var masterVin = "";
var year = "";
var make = "";
var model = "";
var trim = "";
var modelNumber = "";
var packageCode = "";
var driveType = "";
var vehicleType = "";
var bodyType = "";
var bodySubtype = "";
var doors = "";
var bedLength = "";
var wheelBase = "";
var msrp = "";
var invoicePrice = "";
var engineDescription = "";
var blockType = "";
var cylinders = "";
var displacement = "";
var fuelType = "";
var transmissionName = "";
var optionalEquipmentCodes = "";
var installedEquipmentDescriptions = "";
var interiorDescription = "";
var interiorColourCode = "";
var exteriorDescription = "";
var exteriorColourCode = "";
var engineName = "";
var engineID = "";
var engineBrand = "";
var engineIceMaxHp = "";
var engineIceMaxTorque = "";
var engineMaxPayLoad = "";
var maxTowingCapacity = "";
var grossWeight = "";
var fuelTankCapacity = "";
var infoData;

async function decoder(VIN) {
  const decoder_query = {
    decoder_settings: {
      display: "full",
      styles: "on",
      style_data_packs: {
        basic_data: "on",
        pricing: "on",
        engines: "on",
        transmissions: "on",
        standard_specifications: "on",
        standard_generic_equipment: "on",
        oem_options: "on",
        optional_generic_equipment: "on",
        colors: "off",
        warranties: "off",
        fuel_efficiency: "on",
        green_scores: "on",
        crash_test: "on",
      },
      common_data: "on",
      common_data_packs: {
        basic_data: "on",
        pricing: "on",
        engines: "on",
        transmissions: "on",
        standard_specifications: "on",
        oem_options: "on",
        optional_generic_equipment: "on",
      },
    },
    query_requests: {
      NodeJS_Sample: {
        vin: VIN,
        year: "",
        make: "",
        model: "",
        trim: "",
        model_number: "",
        package_code: "",
        drive_type: "",
        vehicle_type: "",
        body_type: "",
        body_subtype: "",
        doors: "",
        bedlength: "",
        wheelbase: "",
        msrp: "",
        invoice_price: "",
        engine: {
          name: "",
          brand: "",
          ice_max_hp: "",
          ice_max_torque: "",
          fuel_type: "",
          engine_id: "",
          description: "",
          block_type: "",
          cylinders: "",
          displacement: "",
          fuel_type: "",
        },
        transmission: {
          description: "",
          trans_type: "",
          trans_speeds: "",
        },
        optional_equipment_codes: "",
        installed_equipment_descriptions: "",
        interior_color: {
          description: "",
          color_code: "",
        },
        exterior_color: {
          description: "",
          color_code: "",
        },
      },
    },
  };

  // Set up the request POST data
  const post_data = querystring.stringify({
    access_key_id: access_key_id,
    secret_access_key: secret_access_key,
    decoder_query: JSON.stringify(decoder_query),
  });

  const options = {
    hostname: "api.dataonesoftware.com",
    port: 443,
    path: "/webservices/vindecoder/decode",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": Buffer.byteLength(post_data),
    },
  };

  var response_string = "";
  const req = https.request(options, (res) => {
    res.on("data", (d) => {
      response_string += d;
    });

    res.on("end", function () {
      response_json = JSON.parse(response_string);
      infoData = response_json;
      masterVin = VIN;

      try{
        year =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.basic_data.year;
      make =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.basic_data.make;
      model =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.basic_data.model;
      trim =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.basic_data.trim;
      modelNumber =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.basic_data.model_number;
      driveType =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.basic_data.drive_type;
      vehicleType =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.basic_data.vehicle_type;
      bodyType =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.basic_data.body_type;
      doors =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.basic_data.doors;
      msrp =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.pricing.msrp;
      engineName =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.engines[0].name;
      }catch(e){
        console.log(e)
      }
      
      
      console.log(masterVin);
      console.log(year);
      console.log(make);
      console.log(model);
      console.log(trim);
      console.log(modelNumber);
      console.log(driveType);
      console.log(vehicleType);
      console.log(doors);
      console.log(msrp);
      console.log(engineName);
      console.log(engineID);
      console.log(engineIceMaxHp);
      console.log(engineIceMaxTorque);
      console.log(engineMaxPayLoad);
      // console.log(engineFuelType);
      // console.log(transmissionName);
      //console.log(maxTowingCapacity);
      console.log(grossWeight);
      console.log(fuelTankCapacity);

      console.log(infoData);

    });
  });

  req.on("error", (error) => {
    console.error(error);
  })

  

  req.write(post_data);
  
  req.end();
  return infoData;
}

router.get("/FuckingVinDoesntWork",ensureAuthenticated,(req, res) => {
  Dealer.find()
  .then(dealer=>{
    res.render('FuckingVin',{
      user:req.user,
      dealer:dealer
    })
  })
});

router.post("/AddVehicle",ensureAuthenticated,(req, res) => {
  decoder(req.body.vin).then(infoData=>{
    Dealer.find()
    .then(dealer=>{
      res.render('DealerAdminAddVehicle',{
        vin:req.body.vin, 
        infoDatas:infoData,
        user:req.user,
        dealer:dealer
      })
    })
  })
});


router.post("/SysAdminAddVehicle",ensureAuthenticated,(req, res) => {
  decoder(req.body.vin).then(infoData=>{
    Dealer.find()
    .then(dealer=>{
      res.render('DashboardSysAdminAddVehicle',{
        vin:req.body.vin,
        infoData:infoData,
        user:req.user,
        dealer:dealer
      })
    })
  })
});

router.get("/flash", function (req) {
  req.flash("vin", masterVin);
  req.flash("year", year);
  req.flash("make", make);
  req.flash("model", model);
  req.flash("trim", trim);
  req.flash("modelNumber", modelNumber);
  req.flash("driveType", driveType);
  req.flash("vehicleType", vehicleType);
  req.flash("doors", doors);
  req.flash("msrp", msrp);
  req.flash("engineName", engineName);
  req.flash("engineID", engineID);
  req.flash("engineIceMaxHp", engineIceMaxHp);
  req.flash("engineIceMaxTorque", engineIceMaxTorque);
  req.flash("engineMaxPayLoad", engineMaxPayLoad);
  req.flash("engineFuelType", engineFuelType);
  req.flash("transmissionName", transmissionName);
  req.flash("grossWeight", grossWeight);
  req.flash("fuelTankCapacity", fuelTankCapacity);
  res.redirect("/Vehicles");
});

module.exports = router;
