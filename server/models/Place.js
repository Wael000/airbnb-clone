import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
    name: String,
    location: String,
    images: [String],
    description: String,
    perks: [String],
    extraInfo: String,
    checkIn: String,
    checkOut: String,
    maxGuests: Number,
});

const Place = mongoose.model('Place', placeSchema);

export default Place;