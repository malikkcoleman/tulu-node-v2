const express = require('express');
const pgroutr = express.Router();
const {ensureAuthenticated} = require('../config/auth');



pgroutr.get('/', function(request, response){
    response.render('index');
})

pgroutr.get('/:page', function(request, response){
    response.render(request.params.page);
})

pgroutr.get('/dashboard',ensureAuthenticated,(req,res)=>
    res.render('dashboard',{
    name:req.user.name
}));

module.exports = pgroutr;