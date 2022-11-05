const React = require('react')

class Default extends React.Component {
    render() {
        const { title } = this.props
        return (
            <html>
                <head>
                    <link rel='stylesheet' href='/css/app.css' />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href='/nfts/new'>View Collection</a>
                        <a href='/nfts'>Bid History</a>
                        {/* <a href='/nfts/:id'>Bid History</a> */}
                        {/* <a href='/user/login'>Login</a>
            <a href='/user/signup'>Sign Up</a> */}
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
