require('dotenv').config()

const db = require('./db')
const Nft = require('./nfts')

const seedNft = [
    {
        name: "Golden Boy",
        value: "100,000 Ether",
        img: "https://i.imgur.com/BkGn0HH.png",
    },
    {
        name: "London Bloke",
        value: "50,000 Ether",
        img: "https://i.imgur.com/9iJ2peH.png",
    },
    {
        name: "Flintstone Laser",
        value: "50,000 Ether",
        img: "https://i.imgur.com/KLgYXlK.png",
    },
    {
        name: "Twitch",
        value: "50,000 Ether",
        img: "https://i.imgur.com/kYOqyME.png",
    },
]