const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const passport = require("passport");

const Order = require("../../models/Orders");

// const newOrder = new Order({
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     email: req.body.email,
//     phonenumber: req.body.phonenumber,
//     address: req.body.address,
//     address2: req.body.address2,
//     city: req.body.city,
//     stateUS: req.body.stateUS,
//     zipcode: req.body.zipcode
//   });

  router.post('/submit_order', function(req,res){ 
    var firstname= req.body.firstname;
    var lastname= req.body.lastname;
    var email= req.body.email;
    var phonenumber= req.body.phonenumber;
    var address1= req.body.address1;
    var address2= req.body.address2;
    var city= req.body.city;
    var stateUS= req.body.stateUS;
    var zipcode= req.body.zipcode ;
  

    let order= new Order(req.body)
    order.save()

})
module.exports= router;