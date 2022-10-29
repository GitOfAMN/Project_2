const mongoose = require('mongoose')

// Make a Schema - tells us what we cannot do (i.e cannot be missing a d name, color, etc)
const nftSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
})


// Make a Model from the Schema

const Nft = mongoose.model('Nft', nftSchema)

// Export the Model for Use in the App

module.exports = Nft