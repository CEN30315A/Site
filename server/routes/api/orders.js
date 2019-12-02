const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const passport = require("passport");
const axios = require("axios");

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
    order.save();

    const date = new Date();
    const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
    const month = ((date.getMonth() + 1) < 10 ?  '0' : '') + (date.getMonth() + 1); //January is 0!
    const year = date.getFullYear();
    var today = month + '/' + day + '/' + year;
    axios.post('/email', {
      "recipients": [order.email],
      "subject": "XDG Site Order Placed",
      "html": "<h2>Order placed with XDG site</h2> <p>You ordered " + order.quantity + " clamps on " + today + " at " + date.getHours() + ":" + date.getMinutes() + ".</p>" + "<h2>Contact Info</h2> <p>Dr. J.C. Roig </p> <p>XDG Technologies, LLC</p> <p>6485 S.W. 51 Court</p> <p>Ocala, FL. 34474-5768</p> <p>Phone: (352) 812-1175</p>"
    })
      .catch(function (error) {
        console.log(error);
      });
    res.redirect('/');
    

    //for testing the posts
    //console.log(order)
    //console.log(req.body)

})

// router.post('/retrieve_orders', function(req, res){
//   console.log('get orders');
//   // console.log(Array.from(Order.find({})));
//   let results= []

//   // Order.find({}).then(eachOne =>{
//   //   results.add(eachOne);

//   // }).then(()=>res.send(results))
//   res.send('test');
// });
module.exports= router;