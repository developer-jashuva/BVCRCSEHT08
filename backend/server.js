// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
  import morgan from "morgan";

dotenv.config();
const app = express();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Connect to MongoDB
// db.js
import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/edunext", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected (Compass)");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

export default connectDB;

connectDB();



// ====== User Model ======
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // ⚠️ Plain text (only for testing)
  role: { type: String, enum: ["student", "instructor"], default: "student" },
});
const User = mongoose.model("User", UserSchema);

// Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/courses", courseRoutes);
// app.use("/api", enrollmentRoutes);   // e.g. /api/enroll/:courseId
// app.use("/api/quiz", quizRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("✅ EduNext API running (no JWT/bcrypt)");
});

//register
app.post("/api/auth/register", async (req, res) => {
  try {
    console.log("register");

    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password, role });
    await newUser.save();

    res.status(201).json({ message: "User registered", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
});



// Login
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
});


// Error handler (last)
// app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
