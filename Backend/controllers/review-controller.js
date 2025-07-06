const Review = require('../models/review-model')

module.exports.userReviews = async (req, res) => {
    try {
        const { name,email, rating, comment } = req.body;
        
        if (!name || !email || !rating || !comment) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        const updatedReview = await Review.findOneAndUpdate(
          { email },
          { name, email, rating: Number(rating), comment },
          { new: true, upsert: true }
        );

        res.status(201).json({
            success: true,
            message: 'Review submitted successfully',
            data: updatedReview
        });
    } catch (error) {
        console.error('Error submitting review:', error);
        res.status(500).json({
            success: false,
            message: 'Error submitting review',
            error: error.message
        });
    }
};

module.exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().sort({ createdAt: -1 });
        
        res.status(200).json({
            success: true,
            data: reviews
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching reviews',
            error: error.message
        });
    }
};