const Activity = require('../models/activity-model');

// Get recent activities
module.exports.getRecentActivities = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const skip = parseInt(req.query.skip) || 0;
        const { type, user, date } = req.query;

        let query = {};

        // Filter by activity type
        if (type) {
            query.type = type;
        }

        // Filter by user
        if (user) {
            query.user = user;
        }

        // Filter by date
        if (date) {
            const startDate = new Date(date);
            const endDate = new Date(date);
            endDate.setDate(endDate.getDate() + 1);
            
            query.timestamp = {
                $gte: startDate,
                $lt: endDate
            };
        }

        const activities = await Activity.find(query)
            .sort({ timestamp: -1 })
            .skip(skip)
            .limit(limit);

        res.json(activities);
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: 'Error fetching recent activities', 
            error: error.message 
        });
    }
};

// Create activity log
module.exports.createActivity = async (activityData) => {
    try {
        const activity = new Activity(activityData);
        await activity.save();
        return activity;
    } catch (error) {
        console.error('Error creating activity log:', error);
        return null;
    }
};

// Log product added activity
module.exports.logProductAdded = async (product, user = 'Admin') => {
    return await this.createActivity({
        type: 'product_added',
        description: `New product "${product.name}" was added`,
        user: user,
        details: {
            productId: product._id,
            productName: product.name,
            amount: product.price
        }
    });
};

// Log product updated activity
module.exports.logProductUpdated = async (product, changes, user = 'Admin') => {
    return await this.createActivity({
        type: 'product_updated',
        description: `Product "${product.name}" was updated`,
        user: user,
        details: {
            productId: product._id,
            productName: product.name,
            changes: changes
        }
    });
};

// Log product deleted activity
module.exports.logProductDeleted = async (product, user = 'Admin') => {
    return await this.createActivity({
        type: 'product_deleted',
        description: `Product "${product.name}" was deleted`,
        user: user,
        details: {
            productId: product._id,
            productName: product.name
        }
    });
};

// Log order activity
module.exports.logOrderActivity = async (order, type, user = 'Admin') => {
    return await this.createActivity({
        type: type,
        description: `Order #${order.id} was ${type === 'order_placed' ? 'placed' : 'updated'}`,
        user: user,
        details: {
            orderId: order.id,
            amount: order.total || order.amount
        }
    });
};

// Log user activity
module.exports.logUserActivity = async (type, user, details = {}) => {
    return await this.createActivity({
        type: type,
        description: `User ${user} ${type === 'login' ? 'logged in' : 'logged out'}`,
        user: user,
        details: details
    });
}; 

// Seed initial activities for demonstration
module.exports.seedInitialActivities = async () => {
    try {
        const count = await Activity.countDocuments();
        if (count === 0) {
            const sampleActivities = [
                {
                    type: 'product_added',
                    description: 'New product "HP EliteBook 840 G8" was added',
                    user: 'Admin',
                    details: {
                        productName: 'HP EliteBook 840 G8',
                        amount: 450
                    },
                    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
                },
                {
                    type: 'product_updated',
                    description: 'Product "Dell Latitude 5420" was updated',
                    user: 'Admin',
                    details: {
                        productName: 'Dell Latitude 5420',
                        changes: { price: 420, stock: 15 }
                    },
                    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000) // 4 hours ago
                },
                {
                    type: 'order_placed',
                    description: 'Order #ORD-001 was placed',
                    user: 'Customer',
                    details: {
                        orderId: 'ORD-001',
                        amount: 450
                    },
                    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000) // 6 hours ago
                },
                {
                    type: 'product_deleted',
                    description: 'Product "Lenovo ThinkPad E14" was deleted',
                    user: 'Admin',
                    details: {
                        productName: 'Lenovo ThinkPad E14'
                    },
                    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000) // 8 hours ago
                },
                {
                    type: 'login',
                    description: 'User Admin logged in',
                    user: 'Admin',
                    timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000) // 10 hours ago
                },
                {
                    type: 'order_updated',
                    description: 'Order #ORD-002 was updated',
                    user: 'Admin',
                    details: {
                        orderId: 'ORD-002',
                        amount: 380
                    },
                    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000) // 12 hours ago
                },
                {
                    type: 'product_added',
                    description: 'New product "Apple MacBook Air M1" was added',
                    user: 'Admin',
                    details: {
                        productName: 'Apple MacBook Air M1',
                        amount: 1200
                    },
                    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
                },
                {
                    type: 'user_registered',
                    description: 'New user "john.doe@example.com" registered',
                    user: 'System',
                    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
                }
            ];

            await Activity.insertMany(sampleActivities);
            console.log('Initial activities seeded successfully');
        }
    } catch (error) {
        console.error('Error seeding initial activities:', error);
    }
}; 