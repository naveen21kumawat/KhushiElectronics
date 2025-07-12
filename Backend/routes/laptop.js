const express = require('express');
const router = express.Router();
const {
  getProductStates,
  getProducts,
  getOrderByID,
  getOrders,
  getProductsByID,
  addProduct,
  editProduct,
  deleteProduct,
  productSales,
  updateOrderStatus,
  searchProducts } = require('../controllers/product-controller')
const { getRecentActivities } = require('../controllers/activity-controller')
const { upload, uploadMultiple, handleUploadError } = require('../middleware/cloudinary-storage');

// Get dashboard statistics
router.get('/stats', getProductStates);
// Get all products
router.get('/products', getProducts);
// Search and filter products
router.get('/products/search', searchProducts);
// Get product by ID
router.get('/products/:id', getProductsByID);
// Add new product
router.post('/products/add', uploadMultiple.array('images', 10), handleUploadError, addProduct);
// Update product
router.put('/products/:id', upload.single('image'), handleUploadError, editProduct);
// Delete product
router.delete('/products/:id', deleteProduct);
// Sales APIs (placeholder - implement actual sales logic)
router.get('/sales', productSales);
// Orders APIs (placeholder - implement actual orders logic)
router.get('/orders', getOrders);
// Update order status
router.put('/orders/:id/status', updateOrderStatus)
// Get order details
router.get('/orders/:id', getOrderByID);
// Get recent activities
router.get('/activities', getRecentActivities);
module.exports = router; 