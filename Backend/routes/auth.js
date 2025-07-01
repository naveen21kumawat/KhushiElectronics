const express = require('express');
const router = express.Router();
const {registerUser,loginUser}=require('../controllers/auth-controller')
const {requireAdminAuth} = require('../middleware/auth')

// Render login/register page at root
router.get('/', (req, res) => {
  res.render('auth');
});

router.get('/admin',requireAdminAuth,(req,res)=>{
  res.render('index')
})

// Register admin
router.post('/register',registerUser)
//Login admin
router.post('/login',loginUser)
// Logout admin
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

module.exports = router; 