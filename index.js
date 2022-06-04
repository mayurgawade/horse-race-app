const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const { authentication, verifyToken, signup} = require('./controller/user')
const { raceResults } = require('./controller/raceResult')
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/racedb')
.then(() => {
    console.log('Connection Open')
})
.catch((err) => {
    console.log('Server error', err)
})

app.use(express.json())
app.use(morgan('dev'))

app.post('/auth', authentication)

app.get('/results', verifyToken, raceResults)

app.post('/signup', signup)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})