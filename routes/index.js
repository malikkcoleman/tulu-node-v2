const express = require("express");
const pgroutr = express.Router();
const ROLE = require("../roles");
const { ensureAuthenticated, authRole } = require("../config/auth");

const Vehicle = require("../models/vehicleschema");
const Dealer = require("../models/dealershipschema");
const uploadController = require("../controllers/upload");
const fetchImage = require("../middleware/getImages");
const fetchFiles = require("../middleware/getFile");
const downloadFile = require("../middleware/downloadfile")
const Address = require("../models/addressschema");
const User = require("../models/userschema");
const TestDrive = require("../models/testdriveschema");
const Application = require("../models/applicationschema");
const Appointment = require("../models/appointmentschema");
const Event = require("../models/eventschema");
const Blog = require("../models/blogschema");
const { query } = require("express");

pgroutr.get("/EditDealer", ensureAuthenticated, (req, res) =>
  Dealer.find({ uuid: req.user.toObject().dealerId }).then((dealer) => {
    Address.find({ targetId: req.user.toObject().dealerId }).then((address) => {
      res.render("EditDealer", {
        user: req.user,
        dealer: dealer,
        address: address,
      });
    });
  })
);

pgroutr.get("/", (req, res) =>
  User.find({ role: "dealeradmin" })
  .then((dealerAdmin) => {
    Dealer.find({})
    .then((dealer) => {
      Blog.find({})
      .then((blog) => {
        User.find({ role: "tulu" })
        .then((tulu) => {
          res.render("Index", {
            user: req.user,
            tulu:tulu,
            blog:blog,
            dealer:dealer,
            dealershipList:dealerAdmin
          })
        })
      })
    })
  })
);

pgroutr.get("/Events", (req, res) =>
  Event.find({})
  .then((event) => {
    res.render("Events", {
      user: req.user,
      event:event
    })
  })
);

pgroutr.get("/TradeVehicle", (req, res) =>
  res.render("TradeVehicle", {
    user: req.user
  })
);

pgroutr.get("/CreditApplication", (req, res) =>
  res.render("CreditApplication", {
    user: req.user
  })
);

pgroutr.get("/EventList", (req, res) =>
  Event.find({})
  .then((eventList) => {
    res.render("EventList", {
      user: req.user,
      eventList:eventList
    })
  })
);


pgroutr.get("/TestDrive/:vin", (req, res) => {
  Vehicle.find({ vin: req.params.vin })
  .then((vehicles) => {
    Dealer.find({ uuid: vehicles[0].dealerId })
    .then((dealer) => {
      res.render("TestDrive", {
        user: req.user,
        vehicles:vehicles,
        dealer:dealer
      })
    })
  })
})

pgroutr.get("/UploadLicense/:targetId", (req, res) => {
  TestDrive.find({_id:req.params.targetId})
  .then((appointment)=>{
    res.render("UploadLicense", {
      user: req.user,
      targetId:req.params.targetId,
      appointment:appointment
    })
  })
})

pgroutr.get("/UploadEvent/:targetId", (req, res) => {
  Event.find({_id:req.params.targetId})
  .then((event)=>{
    res.render("UploadEvent", {
      user: req.user,
      targetId:req.params.targetId,
      event:event
    })
  })
})

pgroutr.get("/UploadBlog/:targetId", (req, res) => {
  Event.find({_id:req.params.targetId})
  .then((blog)=>{
    res.render("UploadBlog", {
      user: req.user,
      targetId:req.params.targetId,
      blog:blog
    })
  })
})

pgroutr.get("/UploadResume/:targetId", (req, res) => {
  Application.find({_id:req.params.targetId})
  .then((application)=>{
    res.render("UploadResume", {
      user: req.user,
      targetId:req.params.targetId,
      application:application
    })
  })
})

pgroutr.get("/Blog/:targetId", (req, res) =>
  Blog.find({_id:req.params.targetId})
  .then((blog)=>{
    res.render("Blog", {
      user: req.user,
      blog:blog,
    })
  })
);

pgroutr.get("/BlogList", (req, res) =>
  Blog.find({})
  .then((blogList) => {
    res.render("BlogList", {
      user: req.user,
      blogList:blogList
    })
  })
);

pgroutr.get("/404", (req, res) =>
  res.render("404", {
    user: req.user,
  })
);

pgroutr.get("/Contact", (req, res) =>
  res.render("Contact", {
    user: req.user,
  })
);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    req.isLogged = true;
    return next();
  }
  res.redirect("/");
}

pgroutr.get("/dashboard", ensureAuthenticated, (req, res) =>
  Vehicle.find({dealerId:req.user.toObject().dealerId}).then((vehicle) => {
    Dealer.find({uuid:req.user.toObject().dealerId}).then((dealer) => {
      Appointment.find({dealerId:dealer[0]._id}).then((appointment) => {
        TestDrive.find({dealershipNameTestDrive:dealer[0].name}).then((testDrive) => {
          res.render("Dashboard", {
            user: req.user,
            vehicle: vehicle,
            dealer: dealer,
            appointment: appointment, 
            testDrive: testDrive, 
          })
        })
      })
    })
  })
);

pgroutr.get("/vindecoder", ensureAuthenticated, (req, res) =>
  res.render("VinDecoder", {
    user: req.user,
  })
);

pgroutr.get("/tulu", ensureAuthenticated, authRole(ROLE.TULU), (req, res) =>
  res.render("Tulu", {
    user: req.user,
  })
);

pgroutr.get("/profile", ensureAuthenticated, authRole(ROLE.USER), (req, res) =>
  res.render("Profile", {
    user: req.user,
  })
);

pgroutr.get(
  "/dashboardsysadmin",
  ensureAuthenticated,
  authRole(ROLE.SYSADMIN),
  (req, res) =>
    res.render("DashboardSysAdmin", {
      user: req.user,
    })
);

var queryfilterz, sortzz, searchq

function clean(obj) { //for cleaning filter when other field is blank
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
      delete obj[propName];
    }
  }
  return obj
}

pgroutr.get("/shop/:start/:limit", (req, res) => {
  Dealer.find({})
  .then(async (dealershipList) => {
    var vehicles = undefined
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
    var vehiclelist = []
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

pgroutr.get("/filter", async (req, res) => {
  searchq = undefined;
  queryfilterz = req.query
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
  vehicleFilter = await Vehicle.find(filterQ)
  .sort(sortzz)
  .limit(10);
  const dealershipList = await Dealer.find({})
  await vehicleFilter.forEach(function(vec){
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
  location.reload();
});

pgroutr.get("/search", async (req,res) => {
  queryfilterz = undefined
  var vehiclelistSearch = []
  searchq = req.query.squery
  try{
    var vehiclesSearch = undefined
    vehiclesSearch = await Vehicle.fuzzySearch({ query: searchq, prefixOnly: true })
    .sort(sortzz)
    .limit(10);
    const dealershipList = await Dealer.find({})
    await vehiclesSearch.forEach(function(vec){
      vec = JSON.parse(JSON.stringify(vec));
      vec.dealer = dealershipList.find(x => x.uuid == vec.dealerId)
      vehiclelistSearch.push(vec)
    })
    res.render("Shop", {
      vehicles: vehiclelistSearch,
      dealershipList: dealershipList,
      user: req.user,
      searchQuery: searchq
    })
  }catch(e){
    console.log(e)
  }
  location.reload();
})

pgroutr.get("/Shopage", async (req, res) => {
  queryfilterz = undefined
  searchq = undefined
  vehicles = await Vehicle.find({})
      .skip(parseInt(req.params.start))
      .limit(parseInt(req.params.limit))
  queryfilterz = undefined;
    res.render("Shop", {
      vehicles: vehicles,
      dealershipList: '',
      user: req.user,
      searchQuery: searchq
    })
})

pgroutr.get("/MessageTulu/:id", (req, res) => {
  User.find({ _id: req.params.id })
  .then((tulu) => {
    res.render("MessageTulu", {
      user: req.user,
      tulu:tulu
    })
  })
})

pgroutr.get("/carview/:vin", (req, res) => {
  Vehicle.find({ vin: req.params.vin })
    .then((vehicles) => {
      Dealer.find({ uuid: vehicles[0].dealerId })
        .then(async (dealers) => {
          User.find({ dealerId: vehicles[0].dealerId }).then(
            async (dealerAdmin) => {
              Address.find({ targetId: vehicles[0].dealerId }).then(
                async (address) => {
                  const images = await fetchImage.getImagesArray(
                    req.params.vin
                  );
                  var myquery = { vin: vehicles[0].vin };

                  var newView = vehicles[0].views + 1;

                  var newvalues = {
                    views:newView
                  }

                  Vehicle.updateOne(myquery, newvalues).then((updatedVehicle) => {
                    console.log(images);
                    res.render("CarView", {
                      vehicles: vehicles,
                      user: req.user,
                      dealers: dealers,
                      dealerAdmin: dealerAdmin,
                      address: address,
                      images: images,
                    });
                  });
                }
              );
            }
          );
        })
        .catch((err) => {
          res.status(500).send(error);
        })
        .catch((err) => {
          res.status(500).send(error);
        });
    })
    .catch((err) => {
      res.status(500).send(error);
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});

pgroutr.get("/tululist", (req, res) => {
  User.find({ role: "tulu" })
    .then((tulu) => {
      res.render("TuluList", {
        tulu: tulu,
        user: req.user,
      });
    })
    .catch((err) => {
      res.status(500).send(error);
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});

pgroutr.get("/BuyNow/:vin", (req, res) => {
  Vehicle.find({ vin: req.params.vin })
    .then((vehicle) => {
      Dealer.find({ uuid: vehicle[0].dealerId }).then((dealer) => {
        res.render("BuyNow", {
          dealer: dealer,
          vehicle: vehicle,
          user: req.user,
        });
      });
    })
    .catch((err) => {
      res.status(500).send(error);
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});

pgroutr.get("/DashboardSysAdminTulu", (req, res) => {
  User.find({ role: "tulu" })
    .then((tulu) => {
      User.find({ role: "user" })
        .then((users) => {
          res.render("DashboardSysAdminTulu", {
            tulu: tulu,
            users: users,
            user: req.user,
          });
        })
        .catch((err) => {
          res.status(500).send(error);
        })
        .catch((err) => {
          res.status(500).send(error);
        });
    })
    .catch((err) => {
      res.status(500).send(error);
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});

pgroutr.get("/DashboardSysAdminUser", (req, res) => {
  User.find({ role: "user" })
    .then((users) => {
      res.render("DashboardSysAdminUser", {
        users: users,
        user: req.user,
      });
    })
    .catch((err) => {
      res.status(500).send(error);
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});

pgroutr.get("/DealerListing/:dealerId", (req, res) => {
  Dealer.find({ uuid: req.params.dealerId })
    .then((dealer) => {
      Address.find({ targetId: req.params.dealerId }).then((address) => {
        Vehicle.find({ dealerId: req.params.dealerId }).then((vehicle) => {
          res.render("DealerListing", {
            dealer: dealer,
            vehicle: vehicle,
            address: address,
            user: req.user,
          });
        });
      });
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});

pgroutr.post("/upload/:type/:targetid", uploadController.uploadFile),
  (req, res) => {
    console.log(req);
};

pgroutr.get("/image/:targetid", (req, res) => {
  fetchImage.getImage(req, res);
});

pgroutr.get("/file/:targetid", (req, res) => {
  fetchFiles.getFile(req, res);
});

pgroutr.get("/download/:targetid", (req, res) => {
  downloadFile.downloadFile(req, res);
});

pgroutr.get("/image/:targetid/:fileId", (req, res) => {
  fetchImage.getCarImage(req, res);
});

pgroutr.get("/tululist", (req, res) => {
  User.find({ role: "tulu" })
    .then((tulu) => {
      res.render("tululist", {
        tulu: tulu,
        user: req.user,
      });
    })
    .catch((err) => {
      res.status(500).send(error);
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});

pgroutr.get("/DealershipList", (req, res) => {
  Dealer.find().then((dealer) => {
    Address.find().then((address) => {
      User.find({ role: "dealeradmin" }).then((dealerAdmin) => {
        res.render("DealershipList", {
          dealer: dealer,
          user: req.user,
          address: address,
          dealeradmin: dealerAdmin,
        });
      });
    });
  });
});

pgroutr.get("/:page", function (req, res) {
  res.render(req.params.page, {
    user: req.user,
  });
});

module.exports = pgroutr;
