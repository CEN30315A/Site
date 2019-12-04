const express = require("express");
const router = express.Router();
const axios = require("axios");
const Order = require("../../models/Orders");


  router.post('/submit_order', function(req,res){ 
 
    let order= new Order(req.body)
    order.save();

    const date = new Date();
    const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
    const month = ((date.getMonth() + 1) < 10 ?  '0' : '') + (date.getMonth() + 1); //January is 0!
    const year = date.getFullYear();
    var today = month + '/' + day + '/' + year;
    axios.post('/email', {
      "recipients": [order.email, "OWNER"],
      "subject": "XDG Site Order Placed",
      "html": "<h2>Order placed with XDG site by " + order.firstname + " " + order.lastname + "</h2> <p>You ordered " + order.quantity + " clamps on " + today + " at " + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ".</p>" + "<h2>Contact Info</h2> <p>Dr. J.C. Roig </p> <p>XDG Technologies, LLC</p> <p>6485 S.W. 51 Court</p> <p>Ocala, FL. 34474-5768</p> <p>Phone: (352) 812-1175</p>"
    })
      .catch(function (error) {
        console.log(error);
      });
      
    res.redirect('/');

})
module.exports= router;