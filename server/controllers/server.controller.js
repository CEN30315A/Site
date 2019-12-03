
const nodemailer = require('nodemailer');
const Visit = require("../models/Visit");

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
    mailOptions.to += recipient + ", ";
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