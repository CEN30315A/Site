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

  
  const promises = req.body.recipients.map(async recipient => {
    mailOptions.to = recipient;
    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return error;
      } else {
        return 'Email sent: ' + info.response;
      }
    });
  });

  const results = await Promise.all(promises)

  console.log(results);
  res.send(results);
}