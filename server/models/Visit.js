const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const CampaignSchema = new Schema({
  key: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("campaigns", CampaignSchema);