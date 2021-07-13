const express = require('express');
const path = require('path');
const ejs = require('ejs');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const fs = require('fs');

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true,useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB Connected!!!');
});


app.use(function(req,res,next){
  res.locals.customerInfo = null;
  next();
})

app.set('view engine','ejs'); // allows us to exclude the file extension

// Read HTTP POST data
app.use(express.urlencoded({ extended: false }));

app.get('/', function(request, response){
  response.render('index');
})

app.get('/:page', function(request, response){
  response.render(request.params.page);
})

app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'assets')));


app.use((req, res, next) => {
  res.render('404error');
});

app.use((error, req, res, next) => {
  res.render('404error');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
