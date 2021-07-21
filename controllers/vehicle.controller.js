const vehicleService = require("../Services/vehicleservice");
const express = require("express");
const flash = require("connect-flash");
const router = express.Router();
const https = require("https");
const querystring = require("query-string");
const bodyParser = require("body-parser");

const vehicle = require("../models/vehicleSchema");

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

function decoder(VIN) {
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
      console.log();
      masterVin = VIN;
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
      bodySubtype =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.basic_data.body_subtype;
      doors =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.basic_data.doors;
      msrp =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.pricing.msrp;
      engineName =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.engines[0].name;
      engineFuelType =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.engines[0].fuel_type;
      engineID =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.engines[0].engine_id;
      engineBrand =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.engines[0].brand;
      engineIceMaxHp =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.engines[0].ice_max_hp;
      engineIceMaxTorque =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.engines[0].ice_max_torque;
      engineMaxPayLoad =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.engines[0].max_payload;
      transmissionName =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.transmissions[0].name;
      /*       maxTowingCapacity =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.standard_specifications[1].specification_values[5]
          .specification_value; */
      grossWeight =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.standard_specifications[1].specification_values[0]
          .specification_value;
      fuelTankCapacity =
        response_json.query_responses.NodeJS_Sample.us_market_data
          .common_us_data.standard_specifications[1].specification_values[2]
          .specification_value;
      console.log(newVehicle);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });
  return newVehicle;
  //req.write(post_data);
  //req.end();
}

const addVehicle = async (req, res, next) => {
  const data = decoder(req.body.vin);
  let vehicle = await new vehicle({
    vin: data.masterVin,
    year: data.year,
    make: data.make,
    model: data.model,
    vehicleType: data.vehicleType,
    trim: data.trim,
    dealerId: "testtest",
    isSold: "testtest",
    doors: data.doors,
    modelNumber: data.modelNumber,
    driveType: data.driveType,
    msrp: data.msrp,
    minPrice: 111,
    refFee: 111,
    engineName: data.engineName,
    engineBrand: data.engineBrand,
    engineID: data.engineID,
    fuelType: data.engineFuelType,
    iceMaxHp: data.engineIceMaxHp,
    iceMaxTorque: data.engineIceMaxTorque,
    maxPayLoad: data.engineMaxPayLoad,
    transmissionName: data.transmissionName,
    colorName: "",
    colorHex: "",
    baseTowingCapacity: "",
    grossWeight: data.grossWeight,
    fuelTankCapacity: data.fuelTankCapacity,
    notes: "",
  });

  vehicle = await vehicle.save();
};

module.exports = {
  addVehicle,
};
module.exports = class Vehicle {
  static async GetVehicles(req, res, next) {
    try {
      const vehicles = await vehicleService.getAllVehicles();
      if (!vehicles) {
        res.status(404).json("There are no vehicles");
      }
      res.json(vehicles);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async CreateVehicle(req, res, next) {
    try {
      const VIN = "3GTP2WE74CG144636";
      const car = decoder(VIN);
      const newVehicle = await vehicleService.createVehicle(car);
      console.log(car);
      console.log(newVehicle);
      res.json(newVehicle);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
