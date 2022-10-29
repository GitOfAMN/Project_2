const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    return (
      <Default title='Marie Auction House | Metaverse Collection'>
        <h1>Featuring The Bored Ape Yacht Club</h1>
        <img class='center' src='https://i.imgur.com/MvR9swe.png' alt='Bored Ape Home' />
      </Default>
    )
  }
}

module.exports = Index
