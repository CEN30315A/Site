const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema for campaign
// Key and date allow for owner to see which mediums of advertisement is best
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