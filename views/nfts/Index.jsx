const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
    render () {
        const { nfts } = this.props
        return (
          <Default title='Bid Library'>
            <ul>
              {
                            nfts.map((item) => {
                              const { name, bid, nft, _id } = item
                              return (
                                <li key={_id}>
                                  <a href={`/nfts/${_id}`}>
                                    {name}
                                  </a>bid {bid} on {nft}

                                  <form method='POST' action={`/nfts/${_id}?_method=DELETE`}>
                                    <input type='submit' value={`Delete ${name}`} />
                                  </form>
                                </li>
                              )
                            }).reverse()
                        }
            </ul>
          </Default>
        )
      }
    }

module.exports = Index
