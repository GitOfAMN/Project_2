const React = require('react')
const Default = require('../layouts/Default.jsx')


class Edit extends React.Component {
    render(){
        const {name, _id, value} = this.props.nft
        return (
            <Default title={`${name} Edit Page`} nft={this.props.nft}>
                <form method="POST" action={`/nfts/${_id}?_method=PUT`}>
                    Name: <input type="text" name="name" defaultValue={name}></input><br/>
                    Value: <input type="checkbox" name="value" defaultChecked={value}/> <br />
                    <input type="submit" value="Edit Nft" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit