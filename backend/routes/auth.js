const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/authMiddleWare');

// POST /auth/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'User not found.' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password.' });
    }

    // ✅ Generate token with user ID + username
    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username, // add username to the token payload
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    return res.status(200).json({
      message: 'Login successful.',
      token,
      userId: user._id,
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

// ✅ GET /auth/homepage - Verify token and respond with username
router.get('/homepage', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("username");
    if (!user) return res.status(404).json({ message: "User not found." });

    return res.status(200).json({
      message: "Token verified. Welcome to homepage!",
      username: user.username,
    });
  } catch (err) {
    console.error("Homepage auth error:", err);
    return res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;
