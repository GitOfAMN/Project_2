const RESOURCE_PATH = '/nfts'

const viewController = {
  index (req, res, next) {
    res.render('nfts/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('nfts/New')
  },
  edit (req, res, next) {
    res.render('nfts/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('nfts/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const nftId = req.params.id || res.locals.data.nft._id
    res.redirect(`${RESOURCE_PATH}/${nftId}`)
  }

}

module.exports = viewController
