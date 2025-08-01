const express=require('express')
const Admin = require('../models/admin-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

module.exports.registerUser= async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      if (req.headers.accept && req.headers.accept.includes('application/json')) {
        return res.status(400).json({ message: 'Email and password are required.' });
      } else {
        req.flash('error', 'Email and password are required.');
        return res.redirect('/');
      }
    }
    const existing = await Admin.findOne({ email });
    if (existing) {
      if (req.headers.accept && req.headers.accept.includes('application/json')) {
        return res.status(409).json({ message: 'Admin already exists.' });
      } else {
        req.flash('error', 'Admin already exists.');
        return res.redirect('/');
      }
    }
    const admin = new Admin({ email, password });
    await admin.save();
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(201).json({ message: 'Admin registered successfully.' });
    } else {
      req.flash('success', 'Admin registered successfully. Please login.');
      res.redirect('/');
    }
  } catch (err) {
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(500).json({ message: 'Registration failed.', error: err.message });
    } else {
      req.flash('error', 'Registration failed.');
      res.redirect('/');
    }
  }
}

// Login admin
module.exports.loginUser=async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      if (req.headers.accept && req.headers.accept.includes('application/json')) {
        return res.status(401).json({ message: 'Email or password is incorrect.' });
      } else {
        req.flash('error', 'Email or password is incorrect.');
        return res.redirect('/');
      }
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      if (req.headers.accept && req.headers.accept.includes('application/json')) {
        return res.status(401).json({ message: 'Email or password is incorrect.' });
      } else {
        req.flash('error', 'Email or password is incorrect.');
        return res.redirect('/');
      }
    }
    const token = jwt.sign({ id: admin._id, email: admin.email }, JWT_SECRET, { expiresIn: '1d' });
    // Set JWT as httpOnly cookie
    res.cookie('token', token, { httpOnly: true, secure: false, sameSite: 'lax', maxAge: 24*60*60*1000 });
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.json({ message: 'Login successful.' });
    } else {
      req.flash('success', 'Login successful!');
      res.redirect('/admin');
    }
  } catch (err) {
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      res.status(500).json({ message: 'Login failed.', error: err.message });
    } else {
      req.flash('error', 'Login failed.');
      res.redirect('/');
    }
  }
}
