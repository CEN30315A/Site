const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const passport = require("passport");

const Order = require("../../models/Orders");

//not necessary anymore

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
 

    let order= new Order(req.body)
    order.save()
    res.redirect('/');

    //for testing the posts
    //console.log(order)
    //console.log(req.body)

})
module.exports= router;