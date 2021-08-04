const express = require("express");
const path = require("path");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const fs = require("fs");
const expressLayouts = require("express-ejs-layouts");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");

require("dotenv").config();

// Passport Config
require("./config/passport")(passport);

// // DB Config
// const dbKeys = require('./config/keys').MongoURI;

// // Connect to mongo
// mongoose.connect(dbKeys,{useNewUrlParser:true,useUnifiedTopology: true})
// .then(()=>console.log('MongoDB Connected...'))
// .catch(err =>console.log(err));

mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DB Connected!!!");
});

app.use(function (req, res, next) {
  res.locals.customerInfo = null;
  next();
});

// EJS
// app.use(expressLayouts); // We dont use this.
app.set("view engine", "ejs");

// Read HTTP POST data //Body Parser
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(
  session({
    secret: "Secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// ----------------------routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/vehicles", require("./routes/vehicles"));
app.use("/dealerships", require("./routes/dealerships"));
app.use("/sysadminvehicles", require("./routes/sysAdminVehicles"));
app.use("/vin", require("./routes/vinDecoder"));
app.use("/appointment", require("./routes/booking"));
// ---------------------------------

app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, "assets")));

// app.use((req, res, next) => {
//   res.render('404error');
// });

// app.use((error, req, res, next) => {
//   res.render('404error');
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
