const mongoose = require('mongoose');

const laptopDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true,
        enum: ['HP', 'Dell', 'Lenovo', 'Apple', 'Asus', 'Acer', 'Microsoft']
    },
    os: {
        type: String,
        required: true,
        enum: ['Windows', 'macOS', 'Linux', 'Chrome OS']
    },
    price: {
        type: Number,
        required: true
    },
    originalPrice: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    processor: {
        type: String,
        required: true,
        enum: ['Intel Core i3', 'Intel Core i5', 'Intel Core i7', 'AMD Ryzen 3', 'AMD Ryzen 5', 'AMD Ryzen 7']
    },
    ram: {
        type: Number,
        required: true
    },
    storage: {
        type: String,
        required: true
    },
    generation: {
        type: String,
        required: true
    },
    ScreenSize: {
        type: String,
        required: true,
        default: "15.6 inches"
    },
    graphics: {
        type: String,
        default: "Integrated Graphics"
    },
    battery: {
        type: String,
        default: "4-cell Lithium-ion"
    },
    warranty: {
        type: String,
        default: "3 Months"
    },
    discount: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    reviews: {
        type: Number,
        default: 0
    },
    availability: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        default: Date.now
    },
    addedDate: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('LaptopDetails', laptopDetailsSchema);

