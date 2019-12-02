const EmailCred = require('../config/email-credentials'),
  nodemailer = require('nodemailer'),
  Visit = require("../models/Visit");

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EmailCred.email,
    pass: EmailCred.password
  }
});

exports.email = async function (req, res) {

  let mailOptions = {
    from: EmailCred.email,
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

    console.log('get orders');
    // console.log(Array.from(Order.find({})));
    //let results= []

    Order.find({}).then(eachOne =>{
      console.log(eachOne)
      res.send(eachOne);
    })

    //.then(()=>res.send(results))
    // res.send('test');
}