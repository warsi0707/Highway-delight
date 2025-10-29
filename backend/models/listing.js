const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    about: {type: String},
    taxes: {type: Number}
})
const Listing = mongoose.model('Listing', listingSchema)
module.exports = Listing