const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing'
    },
    fullName : {type: String, required: true},
    email: {type: String},
    date: {type: String},
    time: {type: String},
    quantity: {type: Number, default: 1},
    total: {type: Number, required: true},
    status : {
        type: String,
        enum: ["Confirmed", "Cancelled"],
        default: "Confirmed"
    },
    createdAt: {type: Date, default: Date.now()}
})

const Booking = mongoose.model('Booking', bookingSchema)
module.exports = Booking