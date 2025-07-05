const express = require('express');
const router = express.Router();
const { userReviews, getAllReviews } = require('../controllers/review-controller');

// Submit a new review
router.post('/submit', userReviews);

// Get all reviews
router.get('/all', getAllReviews);

module.exports = router; 