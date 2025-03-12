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
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Place = mongoose.model('Place', placeSchema);

export default Place;