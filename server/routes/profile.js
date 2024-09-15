const express = require('express');
const router = express.Router();
const User = require('../models/user'); 
const authenticate = require('../middlewares/Auth'); 

// GET Route
router.get('/', authenticate, async (req, res) => {
  try {
    console.log('Authenticated user:', req.user);

    const user = await User.findById(req.user.id); // Use req.user.id
    if (!user) {
      console.error('User not found');
      return res.status(404).json({ error: 'User not found' });
    }

    const { phone, address } = user;
    res.json({ phone, address });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST Route
router.post('/', authenticate, async (req, res) => {
  const { phone, address } = req.body;

  console.log('Incoming profile update data:', { phone, address });
  console.log('Authenticated user:', req.user);

  try {
    const user = await User.findById(req.user.id); // Use req.user.id
    if (!user) {
      console.error('User not found');
      return res.status(404).json({ error: 'User not found' });
    }

    user.phone = phone || user.phone;
    user.address = address || user.address;

    await user.save();

    console.log('Profile updated successfully');
    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
