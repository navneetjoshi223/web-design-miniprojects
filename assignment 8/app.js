// app.js
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('./User');

const app = express();
app.use(bodyParser.json());

// Create User
app.post('/user/create', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format. Please add email in appropriate format.' });
    }

    // Validate full name (only letters and spaces, 2 to 50 characters)
    const fullNameRegex = /^[a-zA-Z ]{2,50}$/;
    if (!fullNameRegex.test(fullName)) {
      return res.status(400).json({ error: 'Invalid full name. It should only contain letters and spaces, and between 2 and 50 characters long.' });
    }

    // Add validation for strong password rule
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
      return res.status(400).json({ error: 'Password does not meet the strength requirements.' });
    }

    //Hashing using BCrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ fullName, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid email or password' });
  }
});

// Edit User
app.put('/user/edit', async (req, res) => {
  try {
    const { fullName, password, email } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // All 3 fields validations again while editing user
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format. Please add email in appropriate format.' });
    }

    const fullNameRegex = /^[a-zA-Z ]{2,100}$/;
    if (!fullNameRegex.test(fullName)) {
      return res.status(400).json({ error: 'Invalid full name. It should only contain letters and spaces, and between 2 and 50 characters long.' });
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
      return res.status(400).json({ error: 'Password does not meet the strength requirements.' });
    }

    // Update the user's full name and password
    user.fullName = fullName;
    user.password = await bcrypt.hash(password, 10);

    await user.save();
    res.json({ message: 'User details updated successfully!' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid full name or password' });
  }
});

// Delete User
app.delete('/user/delete', async (req, res) => {
  try {
    const { email } = req.body;

    // Delete user
    const user = await User.findOneAndDelete({ email });

    if (!user) {
      return res.status(404).send("User not found.");
    }

    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get All Users
app.get('/user/getAll', async (req, res) => {
  const users = await User.find({}, 'fullName email password');
  res.json(users);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
