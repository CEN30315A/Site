const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema that describes the key used at a specific date
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