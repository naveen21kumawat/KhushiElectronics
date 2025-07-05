const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min:1,
        max:5
    },
    comment: {
        type: String,
        required: true
    },
},{ timestamps: true })

module.exports = mongoose.model('reviews', reviewSchema);