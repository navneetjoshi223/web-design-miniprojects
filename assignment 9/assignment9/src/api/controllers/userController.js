const userService = require('../services/userService');

exports.createUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await userService.createUser(fullName, email, password);
    res.status(201).json({ message: 'User created successfully!', user });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create user', message: error.message });
  }
};

exports.editUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await userService.editUser(fullName, email, password);
    res.status(200).json({ message: 'User details updated successfully!', user });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update user', message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { email } = req.body;
    const result = await userService.deleteUser(email);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user', message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users', message: error.message });
  }
};

exports.findUserForLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.findUserForLogin(email, password);
    console.log(user);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.status(200).json({ message: 'User found.', user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to find user for login', message: error.message });
  }
};

