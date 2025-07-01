const express = require('express');
const cors = require('cors');
const app = express();
const dbconnect = require('./config/db');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const laptopRoute = require('./routes/laptop');
const authRoute = require('./routes/auth');



// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
dbconnect();
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

// API Routes
app.use('/api', laptopRoute);
app.use('/', authRoute);

// Frontend API - Welcome message
app.get('/api', (req, res) => {
  res.send('Welcome to the Khushi Laptops API');  
});

// Legacy endpoint for backward compatibility
app.get('/laptopDetails', (req, res) => {
  res.json([
     {
    name: "HP EliteBook 840",
    price: "$450",
    specs: "Processor / 4.4G SB",
  },
  {
    name: "Dell Latitude 5400",
    price: "$400",
    specs: "Processor / 4GB",
  },
  {
    name: "Lenovo ThinkPad",
    price: "$420",
    specs: "Processor / 4.SSD",
  },
  {
    name: "Apple MacBook Air",
    price: "$600",
    specs: "Processor / 15SD",
  },
  ]);
});


// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(5000, () => {
  console.log('🚀 Server is running on port 5000');
  console.log('📊 Admin Dashboard: http://localhost:5000');
  console.log('🔗 API Base URL: http://localhost:5000/api');
}); 