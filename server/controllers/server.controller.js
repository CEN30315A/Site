const nodemailer = require('nodemailer');
const Visit = require("../models/Visit");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const Order = require('../models/Orders');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_CRED_EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

const email = exports.email = async function (req, res) {

  let mailOptions = {
    from: process.env.EMAIL_CRED_EMAIL,
    subject: req.body.subject
  };


  if (req.body.html) {
    mailOptions.html = req.body.html;
  } else {
    mailOptions.text = req.body.text;
  }

  mailOptions.to = "";
  req.body.recipients.map(recipient => {
    if(recipient === "OWNER") {
      mailOptions.to += process.env.OWNER_EMAIL;
    } else {
      mailOptions.to += recipient + ", ";
    }
  });

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.send(error);
    } else {
      res.send(info);
    }
  });
}

exports.campaign = function (req, res) {
  new Visit({
    key: req.path.substring(3),
  })
    .save();
  res.redirect('/');
}

exports.retrieve_orders = function (req, res) {
  Order.find({}).then(all => {
    res.send(all);
  })
}

exports.retrieve_visits = function (req, res) {
  let date = new Date();
  date.setDate(date.getDate() - 31);

  let map = [];
  Visit.find({ "date": { $gte: date } }).then(all => {
    res.send(all);
  })
}

exports.charge = async function (req, res) {
  try {
    let {status, id} = await stripe.charges.create({
      amount: req.body.quantity * process.env.CLAMP_COST,
      currency: "usd",
      description: req.body.quantity + " clamps for " + req.body.firstname + " " + req.body.lastname + " at " + req.body.email,
      source: req.body.token
    });
    req.body.id = id;

    let order = new Order(req.body)
    order.save();
  
    const date = new Date();
    const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
    const month = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1); //January is 0!
    const year = date.getFullYear();
    var today = month + '/' + day + '/' + year;
    email({
      body: {
        "recipients": [order.email, "OWNER"],
        "subject": "XDG Site Order Placed",
        "html": "<h2>Order placed with XDG site by " + order.firstname + " " + order.lastname + "</h2> <p>You ordered " + order.quantity + " clamps on " + today + " at " + date.getHours() + ":" + date.getMinutes() + ".</p>" + "<h2>Contact Info</h2> <p>Dr. J.C. Roig </p> <p>XDG Technologies, LLC</p> <p>6485 S.W. 51 Court</p> <p>Ocala, FL. 34474-5768</p> <p>Phone: (352) 812-1175</p>"
      }
    }, (res) => console.log(res));

    res.json({status});
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
}
