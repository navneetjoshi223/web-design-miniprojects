const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// Function to create a new user
exports.createUser = async (fullName, email, password) => {

  // Hashing the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ fullName, email, password: hashedPassword });
  await user.save();
  return user;
};

// Function to update user details
exports.editUser = async (fullName, email, password) => {

  // Hashing the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.findOneAndUpdate(
    { email },
    { $set: { fullName, password: hashedPassword } },
    { new: true }
  );
  return user;
};

// Function to delete a user
exports.deleteUser = async (email) => {
  const result = await User.deleteOne({ email });
  return result;
};

// Function to get all users
exports.getAllUsers = async () => {
  const users = await User.find({}, 'fullName email password');
  return users;
};

// Function to find if user exists in the DB for login
exports.findUserForLogin = async (email, password) => {

  console.log(email, password);
  
  const user = await User.findOne({ email });
  if(user) {
    const passwordMatches = await bcrypt.compare(password, user.password);
    return passwordMatches ? user : null;
  }

  //return user;
};
