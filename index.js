const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const travelDestination=require('./data/travel-destination.json')
app.get('/', (req, res) => {
    res.send('Travel Guru Running..........')
})
app.get('/destination', (req, res) => {
    res.send(travelDestination)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})