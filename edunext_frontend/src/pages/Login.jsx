import React, { useState } from "react";

const Login = ({ isOpen, onClose }) => {
  const [role, setRole] = useState("Teacher");
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-2xl p-8 shadow-lg relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-center text-2xl font-semibold mb-6">Welcome Back</h2>

        {/* Role */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">I am a...</label>
          <div className="flex justify-between bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setRole("Teacher")}
              className={`w-1/2 py-2 rounded-md font-medium transition ${
                role === "Teacher"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Teacher
            </button>
            <button
              onClick={() => setRole("Student")}
              className={`w-1/2 py-2 rounded-md font-medium transition ${
                role === "Student"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Student
            </button>
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="text-right mt-1">
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>

        <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition">
          Log In
        </button>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Don’t have an account?{" "}
          <a href="#" onClick={(e) => {
    e.preventDefault();      // stop page jump
    switchToRegister();      // just toggle mode
  }} className="text-indigo-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};
export default Login;
