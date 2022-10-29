const mongoose = require('mongoose')

// Make a Schema - tells us what we cannot do (i.e cannot be missing a d name, color, etc)
const bidSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nft: { type: String, required: true },
  bid: { type: Number, required: true }
})

// Make a Model from the Schema

const Bid = mongoose.model('Bid', bidSchema)

// Export the Model for Use in the App

module.exports = Bid
