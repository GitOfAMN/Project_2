const React = require('react');

class Default extends React.Component {
    render(){
        const {nft, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/nfts">Home</a>
                        <a href="/nfts/new">Collection</a>
                        {/* { nft? <a href={`/nft/${nft._id}/edit`}> {nft.name} Edit Page </a> : ''}
                        { nft? <a href={`/nft/${nft._id}`}>{nft.name} Show Page</a> : ''} */}
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default