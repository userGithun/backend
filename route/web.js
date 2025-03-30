const express = require('express');
const FrontController = require('../controller/FrontController');
const route = express.Router();


route.get('/',FrontController.home)
route.get('/about',FrontController.about)
route.get('/contact',FrontController.contact)
route.post('/insertMessage',FrontController.ContactInsert)
    

module.exports = route;