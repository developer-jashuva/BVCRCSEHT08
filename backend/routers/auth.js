import express from "express";
import crypto from "crypto";
import User from "../models/User.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: "Email already registered" });

  const user = await User.create({ name, email, password, role });
  res.status(201).json({ message: "User registered" });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid email or password" });

  if (user.password !== password) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Create random session token
  const token = crypto.randomBytes(16).toString("hex");
  user.token = token;
  await user.save();

  res.json({ token, role: user.role, name: user.name });
});

// Logout
router.post("/logout", async (req, res) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(400).json({ message: "No token" });
  }
  const token = header.split(" ")[1];
  await User.updateOne({ token }, { $unset: { token: "" } });
  res.json({ message: "Logged out" });
});

export default router;
