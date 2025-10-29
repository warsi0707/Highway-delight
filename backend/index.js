require('dotenv').config()
const express = require('express')
const listingRoute = require('./routes/Listing')
const ConnectDB = require('./config/ConnectDB')
const bookingRoute = require('./routes/Booking')
const app = express()
const cors = require('cors')
const { FRONTEND_URL } = require('./config/Config')
const path = require("path")
ConnectDB()

app.use(cors({
    origin: FRONTEND_URL
}))
app.use(express.static(path.join(__dirname,"frontend","dist")))
app.use(express.json())
app.all("/", (req, res) => {
    res.send("Hello world")
})
app.use("/api/v1/listing", listingRoute)
app.use("/api/v1/booking", bookingRoute)

app.get("{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend','dist'))
})
const main =()=>{
    app.listen(3000)
    console.log("App listing on port 3000")
}
main()  