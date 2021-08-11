const express = require("express");
const pgroutr = express.Router();
const ROLE = require("../roles");
const { ensureAuthenticated, authRole } = require("../config/auth");

const Vehicle = require("../models/vehicleschema");
const Dealer = require("../models/dealershipschema");
const uploadController = require("../controllers/upload");
const fetchImage = require("../middleware/getImages");
const Address = require("../models/addressschema");
const User = require("../models/userschema");

pgroutr.get("/", (req, res) =>
  res.render("Index", {
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
  res.render("Dashboard", {
    user: req.user,
  })
);

pgroutr.get('/vindecoder',ensureAuthenticated,(req,res)=>
    res.render('VinDecoder',{
    user:req.user
}));

pgroutr.get('/tulu',ensureAuthenticated, authRole(ROLE.TULU),(req,res)=>
    res.render('Tulu',{
    user:req.user
}));

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

pgroutr.get("/shop", (req, res) => {
  Vehicle.find({})
    .then((vehicles) => {
      res.render("Shop", {
        vehicles: vehicles,
        user: req.user,
      });
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});
pgroutr.get("/carview", (req, res) => {
  Vehicle.find({})
    .then((vehicles) => {
      Dealer.find({})
        .then((dealers) => {
          res.render("CarView", {
            vehicles: vehicles,
            user: req.user,
            dealers: dealers,
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

pgroutr.get("/DashboardSysAdminTulu", (req, res) => {
  User.find({ role: "tulu" })
    .then((tulu) => {
      User.find({role:"user"})
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
  User.find({role:"user"})
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



pgroutr.get('/DealerListing',(req,res)=>{
    Dealer.find({}).then((dealer)=>{
        Vehicle.find({}).then((vehicle)=>{
            res.render('DealerListing',{
                dealer:dealer,
                vehicle:vehicle,
                user:req.user
            })
        })
    }).catch((err)=>{
        res.status(500).send(error);
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});

pgroutr.post("/upload/:type/:targetid", uploadController.uploadFile), (req, res) => {
    console.log(req)
};

pgroutr.get('/files', (req, res) => {
    fetchImage.getFiles(req, res)
})

pgroutr.get('/files/:filename', (req, res) => {
    fetchImage.getFile(req, res)
})

pgroutr.get('/image/:targetid', (req, res) => {
    fetchImage.getImage(req, res)
})

pgroutr.get('/image/:targetid/:fileId', (req, res) => {
  fetchImage.getCarImage(req, res)
})

pgroutr.get('/tululist',(req,res)=>{
    User.find({role:'tulu'}).then((tulu)=>{
        res.render('tululist',{
            tulu:tulu,
            user:req.user
        })
    }).catch((err)=>{
        res.status(500).send(error);
    })
    .catch((err) => {
      res.status(500).send(error);
    });
});

pgroutr.get('/DealershipList',(req,res)=>{
    Dealer.find().then((dealer)=>{
        res.render('DealershipList',{
            dealer:dealer,
            user:req.user
        })
    })
});

pgroutr.get('/:page', function(req, res){
    res.render(req.params.page,{
        user:req.user
})});

module.exports = pgroutr;
