import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true, lowercase: true, trim: true },
  password: { type: String, required: true }, // ⚠️ plain text (demo only)
  role: { type: String, enum: ["student", "instructor"], default: "student" },
  token: { type: String } // for session
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
