const router = require('express').Router();
const ROLE = require("../roles");
const { ensureAuthenticated, authRole } = require("../config/auth");

const Vehicle = require("../models/vehicleschema");
const Dealer = require("../models/dealershipschema");


var queryfilterz
var queryfilterz, sortzz, searchq;
var vehiclelist = []

router.get("/",async (req, res) => {
  queryfilterz = undefined
  searchq = undefined
  Vehicle.find({})
      .skip(parseInt(req.params.start))
      .limit(parseInt(req.params.limit))
      .then(function(data){
        queryfilterz = undefined;
        res.render("Shop", {
          vehicles: data,
          dealershipList: '',
          user: req.user,
          searchQuery: searchq
        })
      })
  
})

router.get("/shop/:start/:limit", (req, res) => {
  Dealer.find({})
  .then(async (dealershipList) => {
    var vehicles
    if(queryfilterz != undefined){
      var filterQ = clean(queryfilterz)
      delete filterQ["VehicleSort"]
      vehicles = await Vehicle.find(filterQ)
      .sort(sortzz)
      .skip(parseInt(req.params.start))
      .limit(parseInt(req.params.limit))
    }else if(searchq != undefined){
      vehicles = await Vehicle.fuzzySearch({ query: searchq, prefixOnly: true })
      .skip(parseInt(req.params.start))
      .limit(parseInt(req.params.limit));
    }else{
      vehicles = await Vehicle.find({})
      .skip(parseInt(req.params.start))
      .limit(parseInt(req.params.limit))
    }
    console.log(vehicles)
    await vehicles.forEach(function(vec){
      vec = JSON.parse(JSON.stringify(vec));
      vec.dealer = dealershipList.find(x => x.uuid == vec.dealerId)
      vehiclelist.push(vec)
    })
    res.send({
      vehicles: vehiclelist,
      dealershipList: dealershipList,
      user: req.user,
      searchQuery: searchq
    });
  });
});

function clean(obj) { //for cleaning filter when other field is blank
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
      delete obj[propName];
    }
  }
  return obj
}

router.get("/filter", async (req, res) => {
  vehiclelist = []
  searchq = undefined;
  queryfilterz = req.query;
  var filterQ = clean(queryfilterz)
  delete filterQ["VehicleSort"]
  if(req.query.VehicleSort == 'kilometers'){
    sortzz = "{'mileage': 1}"
  }else if(req.query.VehicleSort = 'lowToHigh'){
    sortzz = "{'maxPrice': -1}"
  }else if(req.query.VehicleSort = 'highToLow'){
    sortzz = "{'maxPrice': 1}"
  }else{
    sortzz = "{}"
  }
  var vehiclelistFilter = []
  var vehicleFilter = undefined
  Vehicle.find(filterQ)
  .sort(sortzz)
  .limit(10)
  .then(async function(data){
    const dealershipList = await Dealer.find({})
    await data.forEach(function(vec){
      vec = JSON.parse(JSON.stringify(vec));
      vec.dealer = dealershipList.find(x => x.uuid == vec.dealerId)
      vehiclelistFilter.push(vec)
    })
    res.render("Shop", {
      vehicles: vehiclelistFilter,
      dealershipList: dealershipList,
      user: req.user,
      searchQuery: searchq
    })
  })
});

router.get("/search", async (req,res) => {
  vehiclelist = []
  queryfilterz = undefined
  var vehiclelistSearch = []
  searchq = req.query.squery
  try{
    var vehiclesSearch = undefined
    Vehicle.fuzzySearch({ query: searchq, prefixOnly: true })
    .sort(sortzz)
    .limit(10)
    .then(async function(data){
      const dealershipList = await Dealer.find({})
      // console.log(data)
    await data.forEach(function(vec){
      vec = JSON.parse(JSON.stringify(vec));
      vec.dealer = dealershipList.find(x => x.uuid == vec.dealerId)
      vehiclelistSearch.push(vec)
    })
    console.log(vehiclelistSearch)
    res.render("Shop", {
      vehicles: vehiclelistSearch,
      dealershipList: dealershipList,
      user: req.user,
      searchQuery: searchq
    })
    })
    
  }catch(e){
    console.log(e)
  }
})

module.exports = router;