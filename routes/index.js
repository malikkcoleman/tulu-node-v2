const express = require('express');
const pgroutr = express.Router();

pgroutr.get('/', function(request, response){
    response.render('index');
})

pgroutr.get('/:page', function(request, response){
    response.render(request.params.page);
})

module.exports = pgroutr;