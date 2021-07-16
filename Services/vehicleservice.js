const vehicle = require("../models/vehicleSchema");

module.exports = class vehicleservice {
  static async getAllVehicles() {
    try {
      const allVehicles = await vehicle.find();
      return allVehicles;
    } catch (error) {
      console.log(`Could not fetch vehicles ${error}`);
    }
  }

  /*   static async createVehicle(data) {
    try {
      const newVehicle = {
        vin: data.vin,
      };
      const response = await new vehicles(newVehicle).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  } */
};
