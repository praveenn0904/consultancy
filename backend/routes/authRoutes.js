// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const {
  signup,
  login,
  forgotPassword,
} = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
