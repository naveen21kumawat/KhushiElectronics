const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';
const cookieParser = require('cookie-parser');

function requireAdminAuth(req, res, next) {
  let token = null;
  // Check cookie first
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  } else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    // If HTML request, redirect to login
    if (req.accepts('html')) {
      return res.redirect('/login');
    }
    return res.status(401).json({ message: 'No token provided.' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    if (req.accepts('html')) {
      return res.redirect('/login');
    }
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
}

module.exports = { requireAdminAuth };
