const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {

    render() {
        const { name, value, _id, img } = this.props.nft
        const capName = name[0].toUpperCase() + name.substring(1)
        return (
            <Default title={`${capName} Show Page`} nft={this.props.nft}>
                {/* <p>{capName} is a rare NFT. {value ? 'is ready to bid' : 'is not ready to bid'}</p> */}
                {img ? <img src={img} /> : ""}
            </Default>
        )
    }
}

module.exports = Show