const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render() {
        return (
            <Default title="Please Login to Bid">
                <form method="POST" action="/nfts" className="Testform">
                    <img class="center" src="https://i.imgur.com/BkGn0HH.png" alt="Golden Boy" width="400" height="500" /><br></br>
                    <p>Golden Boy - Limited Edition<br></br>Starting Bid Value of 100,000 Ether</p>
                    Name: <input type="text" name="name" placeholder='User Name'></input><br />
                    Bid: <input type="text" name="image" placeholder='Enter Your Bid Here'></input><br />
                    <input type="submit" value="Submit Bid"></input><br></br>

                    <img class="center" src="https://i.imgur.com/kYOqyME.png" alt="Twitch" width="400" height="500" /><br></br>
                    <p>Twitch<br></br>Starting Bid Value of 50,000 Ether</p>
                    Name: <input type="text" name="name" placeholder='User Name'></input><br />
                    Bid: <input type="text" name="image" placeholder='Enter Your Bid Here'></input><br />
                    <input type="submit" value="Submit Bid"></input><br></br>

                    <img class="center" src="https://i.imgur.com/9iJ2peH.png" alt="London Bloke" width="400" height="500" /><br></br>
                    <p>London Bloke<br></br>Starting Bid Value of 50,000 Ether</p>
                    Name: <input type="text" name="name" placeholder='User Name'></input><br />
                    Bid: <input type="text" name="image" placeholder='Enter Your Bid Here'></input><br />
                    <input type="submit" value="Submit Bid"></input><br></br>

                    <img class="center" src="https://i.imgur.com/KLgYXlK.png" alt="Flintstone Laser" width="400" height="500" /><br></br>
                    <p>Flintstone Laser<br></br>Starting Bid Value of 50,000 Ether</p>
                    Name: <input type="text" name="name" placeholder='User Name'></input><br />
                    Bid: <input type="text" name="image" placeholder='Enter Your Bid Here'></input><br />
                    <input type="submit" value="Submit Bid"></input><br></br>
                </form>
            </Default>
        )
    }
}

module.exports = New