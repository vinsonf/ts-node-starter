import mongoose from "mongoose";

const truckSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    coords: { latitude: Number, longitude: Number },
    pictureBinary: String,
    menu: {
        type:mongoose.Schema['Types'].ObjectId,
        ref:'Menu'
    }
});


export const Truck = mongoose.model('Truck', truckSchema)