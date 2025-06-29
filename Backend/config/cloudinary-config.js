const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_API_KEY', 'CLOUDINARY_API_SECRET'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('Missing required Cloudinary environment variables:', missingVars);
  console.error('Please set the following environment variables:');
  missingVars.forEach(varName => {
    console.error(`- ${varName}`);
  });
  process.exit(1);
}

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

// Test Cloudinary connection
cloudinary.api.ping()
  .then(result => {
    console.log('✅ Cloudinary connection successful');
  })
  .catch(error => {
    console.error('❌ Cloudinary connection failed:', error.message);
  });

module.exports = cloudinary; 