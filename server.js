require('dotenv').config() // this lets you read the dotenv file and makes it that we can use it in the rest of the file
// Require modules
const express = require('express')
const db = require('./models/db')
const methodOverride = require('method-override')

// Create our express app
const app = express()

// Configure the app (app.set)
/* Start Config */
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
db.on('open', () => {
    console.log('database connected')
})

/* END CONFIG */

// Mount our middleware (app.use)

/* Start Middleware */
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/nfts', require('./controllers/routeController'))
app.use('/user', require('./controllers/authController'))
/* END Middleware */

/// ///***** This is the code from class week 12 day 2 *****\\\\\\

// Mount Routes

/* Start Routes */

// Tell the app to listen on a port
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})
