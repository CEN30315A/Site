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

exports.email = async function (req, res) {

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
  console.log(req.body);
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body.token
    });

    res.json({status});
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
}
