// routes/userRoutes.js
const express = require("express");
const User = require("../models/user"); // Adjust the path if necessary
const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
  const { username, email, password,nickname } = req.body;

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = new User({ username, email, password });
  await newUser.save();
  res.status(201).json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = new User({ username, email, password });
  await newUser.save();
  res.status(201).json({ message: "User registered successfully" });
});



// You can add more user-related routes here (e.g., login, profile update, etc.)

module.exports = router;
