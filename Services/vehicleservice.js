const express = require("express");
const flash = require("connect-flash");
const router = express.Router();
const https = require("https");
const querystring = require("query-string");
const bodyParser = require("body-parser");
const ROLE = require("../roles");
const vehicle = require("../models/vehicleSchema");

const { ensureAuthenticated, authRole } = require("../config/auth");
const middlewares = [bodyParser.urlencoded({ extended: true })];

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

module.exports = class vehicleservice {
  static async getAllVehicles() {
    try {
      const allVehicles = await vehicle.find();
      console.log(allVehicles);
      return allVehicles;
    } catch (error) {
      console.log(`Could not fetch vehicles ${error}`);
    }
  }

  static async createVehicle(data) {
    try {
      const newVehicle = {
        vin: data.vin,
        year: data.year,
        make: data.make,
        model: data.model,
        vehicleType: data.vehicleType,
        trim: data.trim,
        dealerId: data.dealerId,
        isSold: data.isSold,
        doors: data.doors,
        modelNumber: data.modelNumber,
        driveType: data.driveType,
        msrp: data.msrp,
        minPrice: data.minPrice,
        maxPrice: data.maxPrice,
        refFee: data.refFee,
        engineName: data.engineName,
        engineBrand: data.engineBrand,
        engineID: data.engineID,
        fuelType: data.fuelType,
        iceMaxHp: data.iceMaxHp,
        iceMaxTorque: data.iceMaxTorque,
        maxPayLoad: data.maxPayLoad,
        transmissionName: data.transmissionName,
        colorName: data.colorName,
        colorHex: data.colorHex,
        baseTowingCapacity: data.baseTowingCapacity,
        grossWeight: data.grossWeight,
        fuelTankCapacity: data.fuelTankCapacity,
        notes: data.notes,
      };
      const response = await new vehicles(newVehicle).save();
      console.log(newVehicle);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};
