const mongoose= require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();


const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

module.exports = dbconnect;