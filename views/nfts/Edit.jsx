const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
    render () {
        const { name, bid, _id, nft } = this.props.nft
        return (
          <Default title={`Edit Bid`} nft={this.props.nft}>
            <form method='POST' action={`/nfts/${_id}?_method=PUT`}>
              Name: <input type='text' name='name' defaultValue={name} /><br />
              Bid: <input type='text' name='bid' defaultValue={bid} /><br />
              <input type='submit' value='Edit Bid' />
            </form>
          </Default>
        )
      }
    }

module.exports = Edit
