const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// User Model
const Vehicle = require('../models/vehicleSchema');



// Register Page
router.get('/addvehicle',(req,res)=>{
    res.render('addvehicle');
});

// Register Handle
router.post('/addvehicle',(req,res)=>{
    console.log(req.body);
    // res.send('hello');
    const { vin,year,make,model,vehicleType,trim,dealerId,isSold,doors,modelNumber,driveType,msrp,minPrice,maxPrice,refFee,engineName,engineBrand,engineID,fuelType,iceMaxHp,iceMaxTorque,maxPayLoad,transmissionName,colorName,colorHex,baseTowingCapacity,grossWeight,fuelTankCapacity,notes} = req.body;

    let errors = [];

    // Check required fields
    if(!vin || !year || !make || !model || !vehicleType || !trim || !dealerId || !isSold || !doors || !modelNumber || !driveType || !msrp || !minPrice || !maxPrice || !refFee || !engineName || !engineBrand || !engineID || !fuelType || !iceMaxHp || !iceMaxTorque || !maxPayLoad || !transmissionName || !colorName || !colorHex || !baseTowingCapacity || !grossWeight || !fuelTankCapacity || !notes){
        errors.push({msg:'Please fill in all fields'});
    }

    
    if(errors.length > 0){
        res.render('addvehicle',{
            errors,vin,year,make,model,vehicleType,trim,dealerId,isSold,doors,modelNumber,driveType,msrp,minPrice,maxPrice,refFee,engineName,engineBrand,engineID,fuelType,iceMaxHp,iceMaxTorque,maxPayLoad,transmissionName,colorName,colorHex,baseTowingCapacity,grossWeight,fuelTankCapacity,notes
        });
    }else{
        // res.send('Pass');

        // Validation Passed
        Vehicle.findOne({vin:vin})
        .then(vehicle=>{
            if(vehicle){
                // user Exist
                errors.push({msg:'Vehicle already Exist'})
                res.render('addvehicle',{
                    errors,vin,year,make,model,vehicleType,trim,dealerId,isSold,doors,modelNumber,driveType,msrp,minPrice,maxPrice,refFee,engineName,engineBrand,engineID,fuelType,iceMaxHp,iceMaxTorque,maxPayLoad,transmissionName,colorName,colorHex,baseTowingCapacity,grossWeight,fuelTankCapacity,notes
                })
            }else{
                const newVehicle = new Vehicle({
                    vin,year,make,model,vehicleType,trim,dealerId,isSold,doors,modelNumber,driveType,msrp,minPrice,maxPrice,refFee,engineName,engineBrand,engineID,fuelType,iceMaxHp,iceMaxTorque,maxPayLoad,transmissionName,colorName,colorHex,baseTowingCapacity,grossWeight,fuelTankCapacity,notes
                });


                newVehicle.save()
                .then(vehicle => {
                    // req.flash('success_msg', 'You are now registered and can log in.');
                    res.redirect('/')
                })
                .catch(err => console.log(err));

                console.log(newUser);
                // res.send('hello');
            }
        });
        
    }
    

});

module.exports = router;