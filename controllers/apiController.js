const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.nfts)
  },
  show (req, res, next) {
    res.json(res.locals.data.nfts)
  }
}

module.exports = apiController
