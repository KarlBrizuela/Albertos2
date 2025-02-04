const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const validator = require('validator');

const Booking = require('./models/Booking'); // Booking model
const User = require('./models/User'); // User model
const { PostAdd } = require('@mui/icons-material');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Albertos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// User Signup
app.post('/signup', async (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ fullName: fullname, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({ message: 'Error signing up user' });
  }
});

// User Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

// Save Booking Transaction Route
app.post('/api/booking', async (req, res) => {
  const { checkIn, checkOut, guests, room, roomCost, guestCost, total, transactionId, payerName } = req.body;

  // Validate incoming data
  if (!checkIn || !checkOut || !room || !transactionId || !payerName || 
      !guests || typeof guests.adults !== 'number' || typeof guests.kids !== 'number' ||
      typeof roomCost !== 'number' || typeof guestCost !== 'number' || typeof total !== 'number') {
    return res.status(400).json({ message: 'Missing or invalid required fields' });
  }

  try {
    // Create and save new booking
    const newBooking = new Booking({
      checkIn,
      checkOut,
      guests,
      room,
      roomCost,
      guestCost,
      total,
      transactionId, // Transaction ID
      payerName      // Payer's name
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking saved successfully!' });
  } catch (error) {
    console.error('Error saving booking:', error.message, error.stack);
    
    // Handle validation errors (if any)
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: "Validation error", errors: error.errors });
    }
    
    res.status(500).json({ message: 'Failed to save transaction', error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



const user = require('./models/User'); // Path to your User model
const router = express.Router();

// Get all users
router.get('/getUsers', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});


module.exports = router;



