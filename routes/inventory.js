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
  var vehicles = null;
  if(queryfilterz != undefined){
    vehicles = Vehicle.find(filterQ)
    .sort(sortzz)
    .skip(parseInt(req.params.start))
    .limit(parseInt(req.params.limit))
  // }else if(searchq != undefined){
  //   vehicles = await Vehicle.fuzzySearch({ query: searchq, prefixOnly: true })
  //   .skip(parseInt(req.params.start))
  //   .limit(parseInt(req.params.limit))
  }else{
    vehicles = Vehicle.find({})
    .skip(parseInt(req.params.start))
    .limit(parseInt(req.params.limit))
  }
  var execVec = vehicles.exec();
  var vehiclelistFilter = null;
  vehiclelistFilter = []
  execVec.then(async function(data){
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
  vehiclelist = []
  searchq = undefined;
  sortzz = sorter(req.query.VehicleSort);
  queryfilterz = req.query;
  filterQ = clean(queryfilterz)
  delete filterQ["VehicleSort"]
  vez = null;
  vez = Vehicle.find(filterQ).sort(sortzz).limit(10)
  let promiss = vez.exec();
  var vehiclelistFilter = []
  promiss.then(async function(data){
    const dealershipList = await Dealer.find({})
    await data.forEach(function(vec){
      vec = JSON.parse(JSON.stringify(vec));
      vec.dealer = dealershipList.find(x => x.uuid == vec.dealerId)
      vehiclelistFilter.push(vec)
    })

    res.render('Shop',{
      vehicles: vehiclelistFilter,
      dealershipList: dealershipList,
      user: req.user,
      searchQuery: searchq
    })
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