const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const OrderSchema = new Schema({
  firstname: {
    type: String,
    //required: true
  },
  lastname: {
    type: String,
    //required: true
  },
  email: {
    type: String,
    //required: true
  },
  phonenumber: {
    type: String,
    //required: true
  },
  address1: {
    type: String,
    //required: true
  },
  address2: {
    type: String,
    //required: true
  },
  city: {
    type: String,
    //required: true
  },
  stateUS: {
    type: String,
    //required: true
  },
  zipcode: {
    type: String,
    //required: true
  },
  date: {
    type: Date,
    default: Date.now
  },

//   collection: 'orders'

});
module.exports = Order = mongoose.model("orders", OrderSchema);