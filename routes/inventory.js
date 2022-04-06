const router = require('express').Router();
const ROLE = require("../roles");
const { ensureAuthenticated, authRole } = require("../config/auth");

const Vehicle = require("../models/vehicleschema");
const Dealer = require("../models/dealershipschema");
const VehicleImages = require("../models/vehicleimageschema")


var queryfilterz
var queryfilterz, sortzz, searchq, filterQ;
var vehiclelist = []

function sorter(sortQuery){
  if(sortQuery == 'kilometers'){
    return {mileage: 1}
  }else if(sortQuery == 'lowToHigh'){
    return {maxPrice: 1}
  }else if(sortQuery == 'highToLow'){
    return {maxPrice: -1}
  }else{
    return "{}"
  }
}

router.get("/",async (req, res) => {
    queryfilterz = undefined
    const vehicleimages = await VehicleImages.find({})
    const dealershipList = await Dealer.find({})
    searchq = undefined

    console.log(vehicleimages)
    res.render("Shop", {
      vehicles: [],
      dealershipList: dealershipList,
      user: req.user,
      searchQuery: searchq,
      shopagetype: "shop",
      filterby: 'None',
      vehicleimages: vehicleimages
    })
})

router.get("/shop/:start/:limit", (req, res) => {
  var vehiclelistFilter = []
  Vehicle.find({})
    .skip(parseInt(req.params.start))
    .limit(parseInt(req.params.limit)).then(async function(data){
    const dealershipList = await Dealer.find({})
    const vehicleimages = await VehicleImages.find({})
    await data.forEach(function(vec){
      vec = JSON.parse(JSON.stringify(vec));
      vec.dealer = dealershipList.find(x => x.uuid == vec.dealerId)
      vehiclelistFilter.push(vec)
    })
    res.send({
      vehicles: vehiclelistFilter,
      dealershipList: dealershipList,
      user: req.user,
      searchQuery: searchq,
      vehicleimages: vehicleimages
    })
  })
});

router.get("/shopfilter/:start/:limit", (req, res) => {
  var vehiclelistFilter = []
  Vehicle.find(filterQ)
    .sort(sortzz)
    .skip(parseInt(req.params.start))
    .limit(parseInt(req.params.limit)).then(async function(data){
    const dealershipList = await Dealer.find({})
    const vehicleimages = await VehicleImages.find({})
    await data.forEach(function(vec){
      vec = JSON.parse(JSON.stringify(vec));
      vec.dealer = dealershipList.find(x => x.uuid == vec.dealerId)
      vehiclelistFilter.push(vec)
    })
    res.send({
      vehicles: vehiclelistFilter,
      dealershipList: dealershipList,
      user: req.user,
      searchQuery: searchq,
      vehicleimages: vehicleimages
    })
  })
});

function clean(obj) { //for cleaning filter when other field is blank
  var maxPrice = {}
  for (var propName in obj) {
    if(propName == "minPrice" && obj[propName] !== ''){
      maxPrice.$gte = obj[propName]
    }else if(propName == "maxPrice" && obj[propName] !== ''){
      maxPrice.$lte = obj[propName]
    }
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '' || propName === 'minPrice' || propName === 'maxPrice') {
      delete obj[propName];
    }
  }
  if(Object.keys(maxPrice).length != 0){
    obj.maxPrice = maxPrice
  }
  
  console.log(obj)
  return obj
}

function capitalize(s){
    return s && s[0].toUpperCase() + s.slice(1);
}

router.get("/filter", async (req, res) => {
  searchq = undefined
  sortzz = sorter(req.query.VehicleSort);
  queryfilterz = req.query;
  const vehicleimages = await VehicleImages.find({})
  const dealershipList = await Dealer.find({})
  filterQ = clean(req.query)

  console.log(filterQ)
  delete filterQ["VehicleSort"]
  let iterations = Object.keys(filterQ).length
  var filters = ''
  for (const [key, value] of Object.entries(filterQ)) {
    var ass, seee
    if(key == 'dealerId'){
      seee = dealershipList.filter(dealer => dealer.uuid == value)[0].name
    }else if(key == 'maxPrice'){
      if((value.$gte != undefined) && (value.$lte != undefined)){
        seee = `Price: $${value.$gte} - $${value.$lte}`
      }else if(value.$gte != undefined){
        seee = `Minimum Price: $${value.$gte}`
      }else if(value.$lte != undefined){
        seee = `Maximum Price: $${value.$lte}`
      }else{
        seee = ''
      }
    }else{
      seee = value
    }
    console.log(seee)
    if (!--iterations){
      filters += `${capitalize(seee)}`
    }else{
      filters += `${capitalize(seee)}/`
    } 
  }
  res.render("Shop", {
    vehicles: [],
    dealershipList: dealershipList,
    user: req.user,
    searchQuery: searchq,
    shopagetype: "shopfilter",
    filterby: filters,
    vehicleimages: vehicleimages
  })
});

router.get("/getModels",async function(req, res){
  var models
  if(req.query.make != "" && req.query.type == ""){
    models = await Vehicle.find({make: req.query.make}).distinct('model');
  }else if(req.query.make != "" && req.query.type != ""){
    models = await Vehicle.find({make: req.query.make, vehicleType: req.query.type}).distinct('model');
  }else{
    console.log("donothing")
  }
  var years = null
  if(req.query.make == ""){
    years = await Vehicle.find().distinct('year')
  }else{
    years = await Vehicle.find({make: req.query.make}).distinct('year')
  }
  res.send({
    models: models,
    years: years
  })
})

// router.get("/search", async (req,res) => {
//   vehiclelist = []
//   queryfilterz = undefined
//   var vehiclelistSearch = []
//   searchq = req.query.squery
//   try{
//     var vehiclesSearch = undefined
//     Vehicle.fuzzySearch({ query: searchq, prefixOnly: true })
//     .sort(sorter(req.query.VehicleSort))
//     .limit(10)
//     .then(async function(data){
//       const dealershipList = await Dealer.find({})
//       // console.log(data)
//     await data.forEach(function(vec){
//       vec = JSON.parse(JSON.stringify(vec));
//       vec.dealer = dealershipList.find(x => x.uuid == vec.dealerId)
//       vehiclelistSearch.push(vec)
//     })
//     console.log(vehiclelistSearch)
//     res.send({
//       vehicles: vehiclelistSearch,
//       dealershipList: dealershipList,
//       user: req.user,
//       searchQuery: searchq
//     })
//     })
    
//   }catch(e){
//     console.log(e)
//   }
// })

module.exports = router;