import React from "react";
import Login from "./Login";

const LandingPage = ({ onGetStarted }) => {


  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <div className="text-xl font-semibold flex items-center gap-2">
          <span className="w-5 h-5 rounded-full border-2 border-indigo-500 flex justify-center items-center text-indigo-500 text-sm">
            ⬡
          </span>
          edunext ai
        </div>
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-indigo-600 cursor-pointer">About</li>
          <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
          <li className="hover:text-indigo-600 cursor-pointer">Pricing</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-gradient-to-r from-indigo-50 to-white">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Personalized AI-Powered Learning for Everyone
          </h1>
          <p className="text-gray-600 mt-4">
            Your learning journey, perfectly tailored by AI.
          </p>
          <button
            onClick={onGetStarted}
            className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-md"
          >
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="w-80 h-56 bg-indigo-100 rounded-xl"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-8 md:px-20 py-16">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-10">
          Features Grid
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Personalized Learning Path",
              desc: "Adaptive, curated recommendations that guide your learning journey.",
              icon: "⚡",
            },
            {
              title: "Performance Prediction",
              desc: "Proactively identifies and predicts areas for improvement.",
              icon: "⏺",
            },
            {
              title: "Adaptive Quizzes",
              desc: "Difficulty adjusts automatically to ensure mastery.",
              icon: "ℹ️",
            },
            {
              title: "Learning Style Detection",
              desc: "Identifies your unique learning style to optimize your plan.",
              icon: "📋",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-indigo-600 text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Chatbot Teaser */}
        <div className="mt-10 bg-white rounded-xl shadow flex flex-col md:flex-row justify-between items-center p-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Chatbot Teaser</h3>
            <p className="text-gray-600 text-sm">
              Ask me anything about your learning journey!
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-md">
            Try The AI Chatbot
          </button>
        </div>
      </section>
    </div>
  );
};
<Login></Login>
export default LandingPage;