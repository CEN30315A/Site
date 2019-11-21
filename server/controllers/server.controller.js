const Example = require('../models/examples.server.model');
const EmailCred = require('../config/email-credentials');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EmailCred.email,
    pass: EmailCred.password
  }
});

exports.hello = function (req, res) {
  res.send('world');
};

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

  console.log(mailOptions.to);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.send(error);
    } else {
      res.send(info);
    }
  });
}