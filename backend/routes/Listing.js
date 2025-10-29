const express = require('express');
const Listing = require('../models/listing');
const listingRoute = express.Router()


listingRoute.post("/",async (req, res)=>{
    const {title, description, price, image, about, taxes} = req.body;
    try{
        const newListing = await Listing.create({
            title,
            description,
            price,
            image,
            about, taxes
        })
        return res.json({
            message: "Data posted",
            listing: newListing
        })
    }catch(error){
        res.status(404).json({
            error: error
        })
    }
})
listingRoute.get("/", async(req, res)=>{
    try{
        const listings = await Listing.find({})
        return res.json(listings)
    }catch(error){
        res.status(404).json({
            error: error
        })
    }
})
listingRoute.get("/search", async(req, res)=>{
    const {query} = req.query;
    try{
        const listing = await Listing.find({
            $or: [
                { title: {$regex: query, $options: 'i'}}
            ]
        })
        if(listing.length <= 0){
            return res.json({
                listing: [],
                message: "Listing not found"
            })
        }
        return res.json({
            listing: listing
        })
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
})
listingRoute.get("/:id", async(req, res)=>{
    try{
        const listing = await Listing.findById(req.params.id)
        if(!listing){
            return res.status(404).json({
                error: error
            })
        }
        return res.json(listing)
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
})


module.exports = listingRoute