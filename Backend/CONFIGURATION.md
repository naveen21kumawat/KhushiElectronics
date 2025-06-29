# Configuration Guide

## Environment Variables Setup

Create a `.env` file in the Backend directory with the following variables:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/khushi_laptops

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Server Configuration
NODE_ENV=development
PORT=5000

# Optional: JWT Secret for authentication (if needed later)
JWT_SECRET=your_jwt_secret_key_here
```

## Cloudinary Setup

### 1. Create Cloudinary Account
1. Go to [Cloudinary](https://cloudinary.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your Credentials
1. Log in to your Cloudinary dashboard
2. Go to the "Dashboard" section
3. Copy your:
   - Cloud Name
   - API Key
   - API Secret

### 3. Update Environment Variables
Replace the placeholder values in your `.env` file with your actual Cloudinary credentials:

```env
CLOUDINARY_CLOUD_NAME=your_actual_cloud_name
CLOUDINARY_API_KEY=your_actual_api_key
CLOUDINARY_API_SECRET=your_actual_api_secret
```

## Database Setup

### MongoDB Local Setup
1. Install MongoDB on your system
2. Start MongoDB service
3. Create a database named `khushi_laptops`

### MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Get your connection string
4. Update `MONGODB_URI` in your `.env` file

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up Environment Variables**
   - Copy the `.env` template above
   - Fill in your actual values

3. **Start the Server**
   ```bash
   npm start
   ```

4. **Verify Configuration**
   - Check console for Cloudinary connection success message
   - Access admin dashboard at `http://localhost:5000`

## API Endpoints

After configuration, all API endpoints will be available at:
- Base URL: `http://localhost:5000/api`
- Admin Dashboard: `http://localhost:5000`

### Available Endpoints:
- `GET /api/stats` - Dashboard statistics
- `GET /api/products` - Get all products
- `POST /api/products/add` - Add new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/sales` - Get sales data
- `GET /api/orders` - Get orders data

## Troubleshooting

### Cloudinary Connection Issues
- Verify your credentials are correct
- Check that your Cloudinary account is active
- Ensure you're using the correct cloud name

### Database Connection Issues
- Verify MongoDB is running
- Check your connection string
- Ensure the database exists

### Image Upload Issues
- Check file size (max 5MB)
- Verify file format (jpg, jpeg, png, webp)
- Ensure Cloudinary credentials are set correctly 