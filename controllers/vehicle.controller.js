const vehicleService = require("../Services/vehicleservice");

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

  /*   static async CreateVehicle(req, res, next) {
    try {
      const newVehicle = await vehicleService.createVehicle(req.body);
      res.json(newVehicle);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } */
};
