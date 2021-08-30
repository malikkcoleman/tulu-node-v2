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
const https = require("https");

const hostname = "localhost";
const port = 3000;

const cert = fs.readFileSync("./path/tulucanada_com.crt");
const ca = fs.readFileSync("./path/tulucanada_com.ca-bundle");
const key = fs.readFileSync("./path/tulucanada_com.key");

let options = {
  cert: cert, // fs.readFileSync('./ssl/example.crt');
  ca: ca, // fs.readFileSync('./ssl/example.ca-bundle');
  key: key, // fs.readFileSync('./ssl/example.key');
};

// also okay: https.createServer({cert, ca, key}, (req, res) => { ...
const httpsServer = https.createServer(options, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>HTTPS server running</h1>");
});

httpsServer.listen(port, hostname);

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
const TWO_HOURS = 1000 * 60 * 60 * 2;

app.use(
  session({
    secret: "Secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: TWO_HOURS, sameSite: true, secure: true },
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
app.use("/tulu", require("./routes/tulu"));
app.use("/appointment", require("./routes/booking"));
app.use("/buynow", require("./routes/buynow"));
app.use("/contact", require("./routes/contact"));
app.use("/finance", require("./routes/finance"));
app.use("/testdrive", require("./routes/testDrive"));
// ---------------------------------

app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, "assets")));

app.use(function (err, req, res, next) {
  res.render("404", {
    user: req.user,
  });
});
app.use(function (req, res) {
  res.status(404).render("404", {
    user: req.user,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
