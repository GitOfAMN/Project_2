const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
    render() {
        const { name, bid, nft, _id } = this.props.nft
        const capName = name[0].toUpperCase() + name.substring(1)
        return (
            <Default title={`Bid Library`} nft={this.props.nft}>
                <p>{capName} bid {bid} Ether on {nft}</p>
                <form method='POST' action={`/nfts/${_id}?_method=DELETE`}>
                    <input type='submit' value={`Delete Bid`} />
                </form>
                <a href={`/nfts/${_id}/edit`}>Edit Bid</a>
                {/* <form method='POST' action={`/nfts/${_id}?_method=EDIT`}>
                    <input type='submit' value={`Edit Bid`} />
                </form> */}
            </Default>
        )
    }
}

module.exports = Show