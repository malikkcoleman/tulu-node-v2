const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const fs = require('fs');


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
