const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Place Your Bids'>
        <form method='POST' action='/nfts' className='Testform'>
          <img class='center' src='https://i.imgur.com/BkGn0HH.png' alt='Golden Boy' width='400' height='500' /><br />
          <p>Golden Boy - Limited Edition<br />Starting Bid Value of 50,000 Ether</p>
          Name: <input type='text' name='name' placeholder='Full Name Here' />
          Bid: <input type='text' name='bid' placeholder='Bid Amount Here' /><br />
          <input type='hidden' name='nft' value='Golden Boy' />
          <input type='submit' value='Submit Bid' /><br />
        </form>

        <form method='POST' action='/nfts' className='Testform'>
          <img class='center' src='https://i.imgur.com/kYOqyME.png' alt='Twitch' width='400' height='500' /><br />
          <p>Twitch<br />Starting Bid Value of 10,000 Ether</p>
          Name: <input type='text' name='name' placeholder='Full Name Here' />
          Bid: <input type='text' name='bid' placeholder='Bid Amount Here' /><br />
          <input type='hidden' name='nft' value='Twitch' />
          <input type='submit' value='Submit Bid' /><br />
        </form>

        <form method='POST' action='/nfts' className='Testform'>
          <img class='center' src='https://i.imgur.com/9iJ2peH.png' alt='London Bloke' width='400' height='500' /><br />
          <p>London Bloke<br />Starting Bid Value of 10,000 Ether</p>
          Name: <input type='text' name='name' placeholder='Full Name Here' />
          Bid: <input type='text' name='bid' placeholder='Bid Amount Here' /><br />
          <input type='hidden' name='nft' value='London Bloke' />
          <input type='submit' value='Submit Bid' /><br />
        </form>

        <form method='POST' action='/nfts' className='Testform'>
          <img class='center' src='https://i.imgur.com/KLgYXlK.png' alt='Flintstone Laser' width='400' height='500' /><br />
          <p>Flintstone Laser<br />Starting Bid Value of 10,000 Ether</p>
          Name: <input type='text' name='name' placeholder='Full Name Here' />
          Bid: <input type='text' name='bid' placeholder='Bid Amount Here' /><br />
          <input type='hidden' name='nft' value='Flintstone Laser' />
          <input type='submit' value='Submit Bid' /><br />
        </form>
      </Default>
    )
  }
}

module.exports = New
