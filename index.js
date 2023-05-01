const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")
app.use(cors())
const travelDestination=require('./data/travel-destination.json')
const hotelData=require("./data/hoteldata.json")
app.get('/', (req, res) => {
    res.send('Travel Guru Running..........')
})
app.get('/destination', (req, res) => {
    res.send(travelDestination)
})
app.get('/hotel', (req, res) => {
    res.send(hotelData)
})
app.get('/hotel/:id', (req, res) => {
    const id =req.params.id
    const selectedHotels=hotelData.filter(onehotelData=>onehotelData.place_id===id)
    res.send(selectedHotels)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})