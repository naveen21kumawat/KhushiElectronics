const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['product_added', 'product_updated', 'product_deleted', 'order_placed', 'order_updated', 'user_registered', 'login', 'logout']
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: String,
        default: 'Admin'
    },
    details: {
        productId: String,
        productName: String,
        orderId: String,
        amount: Number,
        changes: Object
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    ipAddress: String,
    userAgent: String
});

// Index for efficient querying by timestamp
activitySchema.index({ timestamp: -1 });

module.exports = mongoose.model('Activity', activitySchema); 