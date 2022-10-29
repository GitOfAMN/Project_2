const React = require('react');
const Default = require('../layouts/Default.jsx')


class Index extends React.Component{
    render(){
        const {nft} = this.props
        return(
            <Default title="Featuring The Bored Ape Yacht Club">
                <img class="center" src="https://i.imgur.com/MvR9swe.png" alt="Bored Ape Home" />
            </Default>
        )
    }
}

module.exports = Index