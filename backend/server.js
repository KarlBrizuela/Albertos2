const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');  // Import jsonwebtoken
require('dotenv').config();  // Load environment variables from .env file
const validator = require('validator');

const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Use middleware
app.use(express.json()); // Middleware to parse JSON request bodies

const User = require('./models/User');

// Connect to MongoDB (using environment variables for production)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Albertos')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });


// Listen to server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Handle user signup
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
  
      const newUser = new User({
        fullName: fullname,
        email,
        password: hashedPassword,
      });
  
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error signing up user:', error);
      res.status(500).json({ message: 'Error signing up user' });
    }
  });
  
// Handle user login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Debugging logs
    console.log('Received login request:', req.body);
  
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        console.log('User not found');
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log('Password mismatch');
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET || 'your_jwt_secret', // Replace with env variable
        { expiresIn: '1h' }
      );
  
      // Debugging log
      console.log('Generated JWT:', token);
  
      // Send token to client
      return res.status(200).json({ token });
    } catch (error) {
      console.error('Error logging in user:', error);
      return res.status(500).json({ message: 'Server error, please try again later' });
    }
  });
  