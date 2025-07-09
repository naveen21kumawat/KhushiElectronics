const express = require('express');
const cors = require('cors');
const app = express();
const dbconnect = require('./config/db');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
app.use(cookieParser());
const laptopRoute = require('./routes/laptop');
const authRoute = require('./routes/auth');
const reviewRoute = require('./routes/review');

// Enable CORS for all routes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Connect to the database
dbconnect();
app.set('view engine', 'ejs');
// Static files
app.use(express.static('public'));
// --- Move session and flash middleware here, before routes ---
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
// Make flash messages available in all EJS templates
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});
// --- End move ---
// API Routes
app.use('/api', laptopRoute);
app.use('/api/reviews', reviewRoute);
app.use('/', authRoute);
// Frontend API - Welcome message
app.get('/api', (req, res) => {
  res.send('Welcome to the Khushi Laptops API');  
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