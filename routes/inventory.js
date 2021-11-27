const router = require('express').Router();
const ROLE = require("../roles");
const { ensureAuthenticated, authRole } = require("../config/auth");

const Vehicle = require("../models/vehicleschema");
const Dealer = require("../models/dealershipschema");


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
  searchq = undefined
  res.render("Shop", {
    vehicles: [],
    dealershipList: '',
    user: req.user,
    searchQuery: searchq,
    shopagetype: "shop"
  })
})

router.get("/shop/:start/:limit", (req, res) => {
  var vehiclelistFilter = []
  Vehicle.find({})
    .skip(parseInt(req.params.start))
    .limit(parseInt(req.params.limit)).then(async function(data){
    const dealershipList = await Dealer.find({})
    await data.forEach(function(vec){
      vec = JSON.parse(JSON.stringify(vec));
      vec.dealer = dealershipList.find(x => x.uuid == vec.dealerId)
      vehiclelistFilter.push(vec)
    })
    res.send({
      vehicles: vehiclelistFilter,
      dealershipList: dealershipList,
      user: req.user,
      searchQuery: searchq
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
    await data.forEach(function(vec){
      vec = JSON.parse(JSON.stringify(vec));
      vec.dealer = dealershipList.find(x => x.uuid == vec.dealerId)
      vehiclelistFilter.push(vec)
    })
    res.send({
      vehicles: vehiclelistFilter,
      dealershipList: dealershipList,
      user: req.user,
      searchQuery: searchq
    })
  })
});

function clean(obj) { //for cleaning filter when other field is blank
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
      delete obj[propName];
    }
  }
  return obj
}

router.get("/filter", (req, res) => {
  searchq = undefined
  sortzz = sorter(req.query.VehicleSort);
  queryfilterz = req.query;
  filterQ = clean(req.query)
  delete filterQ["VehicleSort"]
  res.render("Shop", {
    vehicles: [],
    dealershipList: '',
    user: req.user,
    searchQuery: searchq,
    shopagetype: "shopfilter"
  })
});

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