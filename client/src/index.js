import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data/data';
import Email from './config';

ReactDOM.render(<App data={data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: Email.email,
    pass: Email.password
  }
});

var mailOptions = {
  from: Email.email,
  to: 'nicholas.signori@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

function send() {
  transporter.sendMail(mailOptions, function(error, info){
  console.log("triggered");
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})};
