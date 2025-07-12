const express = require('express')
const Laptop = require('../models/laptop-model');
const { logProductAdded, logProductUpdated, logProductDeleted } = require('./activity-controller');

module.exports.getProductStates = async (req, res) => {
    try {
        const totalProducts = await Laptop.countDocuments();
        const totalSales = 0; // Placeholder
        const totalOrders = 0; // Placeholder
        const totalCustomers = 0; // Placeholder

        res.json({
            totalProducts,
            totalSales,
            totalOrders,
            totalCustomers
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching stats', error: error.message });
    }
}

module.exports.getProducts = async (req, res) => {
    try {
        const products = await Laptop.find().sort({ addedDate: -1 });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
}

module.exports.getProductsByID = async (req, res) => {
  try {
    const { id } = req.params;
    const laptop = await Laptop.findById(id);
    
    if (!laptop) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ 
      success: true,
      laptop: laptop 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error fetching product', 
      error: error.message 
    });
  }
}

module.exports.addProduct = async (req, res) => {
  try {
    const {
      name, brand, model, price, originalPrice, processor, ram, storage, os, description
    } = req.body;

    // Validate required fields
    const requiredFields = ['name', 'brand', 'model', 'price', 'originalPrice', 'processor', 'ram', 'storage', 'os', 'description'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    // Validate image upload
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'At least one product image is required'
      });
    }

    // Extract image paths from uploaded files
    const imagePaths = req.files.map(file => file.path);

    const laptop = new Laptop({
      name,
      brand,
      model,
      price: parseFloat(price),
      originalPrice: parseFloat(originalPrice),
      processor,
      ram: parseInt(ram),
      storage,
      os,
      description,
      image: imagePaths,
      generation: 'Latest', // Default value
      ScreenSize: '15.6 inches', // Default value
      graphics: 'Integrated Graphics', // Default value
      battery: '4-cell Lithium-ion', // Default value
      warranty: '3 Months', // Default value
      discount: 0, // Default value
      rating: 0, // Default value
      reviews: 0, // Default value
      availability: true, // Default value
    });

    await laptop.save();
    
    // Log the activity
    await logProductAdded(laptop, 'Admin');
    
    res.status(201).json({ 
      success: true,
      message: 'Product added successfully', 
      laptop: laptop 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error adding product', 
      error: error.message 
    });
  }
}

module.exports.editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // Remove undefined values
    Object.keys(updateData).forEach(key => {
      if (updateData[key] === undefined) {
        delete updateData[key];
      }
    });

    // Convert numeric fields
    if (updateData.price) updateData.price = parseFloat(updateData.price);
    if (updateData.originalPrice) updateData.originalPrice = parseFloat(updateData.originalPrice);
    if (updateData.ram) updateData.ram = parseInt(updateData.ram);
    

    if (req.file) {
      updateData.image = req.file.path;
    }

    const laptop = await Laptop.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

    if (!laptop) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Log the activity
    await logProductUpdated(laptop, updateData, 'Admin');

    res.json({
      success: true,
      message: 'Product updated successfully',
      laptop: laptop
    });
  } catch (error) {
    console.error('Edit Product Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating product',
      error: error.message
    });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const laptop = await Laptop.findById(id);
    
    if (!laptop) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Log the activity before deletion
    await logProductDeleted(laptop, 'Admin');
    
    await Laptop.findByIdAndDelete(id);

    res.json({ 
      success: true,
      message: 'Product deleted successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error deleting product', 
      error: error.message 
    });
  }
}

module.exports.searchProducts =  async (req, res) => {
  try {
    const { search, brand, minPrice, maxPrice, processor } = req.query;
    
    let query = {};
    
    // Search by name or model
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { model: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Filter by brand
    if (brand) {
      query.brand = brand;
    }
    
    // Filter by price range
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseFloat(minPrice);
      if (maxPrice) query.price.$lte = parseFloat(maxPrice);
    }
    
    // Filter by processor
    if (processor) {
      query.processor = processor;
    }
    
    const products = await Laptop.find(query).sort({ addedDate: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error searching products', error: error.message });
  }
}

module.exports.productSales = async (req, res) => {
  try {
    // Placeholder sales data
    const sales = [
      {
        id: '1',
        customer: 'John Doe',
        product: 'HP EliteBook 840',
        amount: 450,
        date: new Date(),
        status: 'Completed'
      },
      {
        id: '2',
        customer: 'Jane Smith',
        product: 'Dell Latitude 5400',
        amount: 400,
        date: new Date(),
        status: 'Completed'
      },
      {
        id: '3',
        customer: 'Mike Johnson',
        product: 'Lenovo ThinkPad',
        amount: 420,
        date: new Date(),
        status: 'Completed'
      },
      {
        id: '4',
        customer: 'Sarah Wilson',
        product: 'Apple MacBook Air',
        amount: 600,
        date: new Date(),
        status: 'Completed'
      }
    ];

    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sales', error: error.message });
  }
}

module.exports.getOrders = async (req, res) => {
  try {
    // Placeholder orders data
    const orders = [
      {
        id: '1',
        customer: 'John Doe',
        products: ['HP EliteBook 840'],
        total: 450,
        date: new Date(),
        status: 'Delivered'
      },
      {
        id: '2',
        customer: 'Jane Smith',
        products: ['Dell Latitude 5400'],
        total: 400,
        date: new Date(),
        status: 'Processing'
      },
      {
        id: '3',
        customer: 'Mike Johnson',
        products: ['Lenovo ThinkPad'],
        total: 420,
        date: new Date(),
        status: 'Shipped'
      },
      {
        id: '4',
        customer: 'Sarah Wilson',
        products: ['Apple MacBook Air'],
        total: 600,
        date: new Date(),
        status: 'Pending'
      }
    ];

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
}


module.exports.updateOrderStatus= async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    // Validate status
    const validStatuses = ['Pending', 'Processing', 'Shipped', 'Delivered'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be one of: Pending, Processing, Shipped, Delivered'
      });
    }
    
    // Placeholder - implement actual order status update logic
    console.log(`Updating order ${id} status to ${status}`);
    
    res.json({
      success: true,
      message: 'Order status updated successfully',
      orderId: id,
      newStatus: status
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating order status',
      error: error.message
    });
  }
}

module.exports.getOrderByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Placeholder - implement actual order details logic
    const orderDetails = {
      id: id,
      customer: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      address: '123 Main St, City, State 12345',
      products: [
        {
          name: 'HP EliteBook 840',
          price: 450,
          quantity: 1
        }
      ],
      total: 450,
      status: 'Delivered',
      orderDate: new Date(),
      deliveryDate: new Date(),
      paymentMethod: 'Credit Card',
      trackingNumber: 'TRK123456789'
    };
    
    res.json({
      success: true,
      order: orderDetails
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching order details',
      error: error.message
    });
  }
}