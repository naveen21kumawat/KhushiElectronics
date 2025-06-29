# Khushi Laptops Admin Dashboard

A comprehensive admin dashboard for managing laptop products, sales, and orders.

## Features

### 🏠 Dashboard Overview
- **Statistics Cards**: View total products, sales, orders, and customers
- **Interactive Charts**: Sales overview and top products visualization
- **Recent Activity**: Track latest activities and updates

### 📦 Product Management
- **View All Products**: Complete list with search and filter functionality
- **Add New Products**: Comprehensive form with image upload
- **Edit Products**: Update product details and specifications
- **Delete Products**: Remove products from inventory

### 📊 Sales Analytics
- **Sales Summary**: Monthly, weekly, and daily sales overview
- **Sales Charts**: Visual representation of sales data
- **Recent Sales**: Detailed sales transaction history

### 🛒 Order Management
- **Order Status Tracking**: Pending, Processing, Shipped, Delivered
- **Order Summary**: Status-wise order counts
- **Order Actions**: Update status and view details

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Cloudinary account for image uploads

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   Create a `.env` file in the root directory:
   ```
   MONGODB_URI=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

3. **Start the Server**
   ```bash
   npm start
   ```

4. **Access Admin Dashboard**
   Open your browser and navigate to: `http://localhost:5000`

## API Endpoints

### Dashboard Statistics
- `GET /api/stats` - Get dashboard statistics

### Product Management
- `GET /api/products` - Get all products
- `POST /api/products/add` - Add new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/products/:id` - Get product by ID

### Sales & Orders
- `GET /api/sales` - Get sales data
- `GET /api/orders` - Get orders data

## Product Schema

```javascript
{
  name: String (required),
  brand: String (required) - enum: ['HP', 'Dell', 'Lenovo', 'Apple', 'Asus', 'Acer', 'Microsoft'],
  model: String (required),
  price: Number (required),
  originalPrice: Number (required),
  processor: String (required) - enum: ['Intel Core i3', 'Intel Core i5', 'Intel Core i7', 'AMD Ryzen 3', 'AMD Ryzen 5', 'AMD Ryzen 7'],
  ram: Number (required),
  storage: String (required),
  os: String (required) - enum: ['Windows', 'macOS', 'Linux', 'Chrome OS'],
  description: String (required),
  image: String (required),
  generation: String (default: 'Latest'),
  ScreenSize: String (default: '15.6 inches'),
  graphics: String (default: 'Integrated Graphics'),
  battery: String (default: '4-cell Lithium-ion'),
  warranty: String (default: '3 Months'),
  discount: Number (default: 0),
  rating: Number (default: 0),
  reviews: Number (default: 0),
  availability: Boolean (default: true),
  releaseDate: Date (default: Date.now),
  addedDate: Date (default: Date.now)
}
```

## Usage Guide

### Adding a New Product
1. Navigate to "Add Product" section
2. Fill in all required fields
3. Upload a product image
4. Click "Add Product" to save

### Managing Products
1. Go to "Products" section
2. Use search and filter options to find specific products
3. Click edit/delete icons to modify products
4. View product details and status

### Tracking Sales
1. Visit "Sales" section for analytics
2. View sales charts and summaries
3. Check recent sales transactions
4. Monitor sales performance

### Managing Orders
1. Access "Orders" section
2. View order status summary
3. Update order status as needed
4. Track order progress

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Frontend**: EJS templates with Tailwind CSS
- **Charts**: Chart.js
- **Icons**: Font Awesome
- **Image Upload**: Cloudinary
- **Styling**: Tailwind CSS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License. 