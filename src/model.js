const mongoose = require('mongoose')
const Schema = mongoose.Schema

const campaignSchema = new Schema({
  campaignId: String
})

module.exports = mongoose.model('Campaign', campaignSchema)
