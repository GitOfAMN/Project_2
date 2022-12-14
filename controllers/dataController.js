const Nft = require('../models/bid')

const dataController = {
  // Index,
  index (req, res, next) {
    Nft.find({}, (err, foundNft) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.nfts = foundNft
        next()
      }
    })
  },
  // //Destroy
  destroy (req, res, next) {
    Nft.findByIdAndDelete(req.params.id, (err, deletedNft) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.nft = deletedNft
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    // req.body.readyToBid = req.body.readyToBid === 'on'
    Nft.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedNft) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.nft = updatedNft
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    // req.body.readyToBid = req.body.readyToBid === 'on'
    Nft.create(req.body, (err, createdNft) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.nft = createdNft
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Nft.findById(req.params.id, (err, foundNft) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a NFT with that ID'
        })
      } else {
        res.locals.data.nft = foundNft
        next()
      }
    })
  }
}

module.exports = dataController
