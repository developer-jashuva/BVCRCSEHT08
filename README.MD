Here’s a **polished GitHub README.md** template for your hackathon project.
You can copy-paste this into your repository and tweak details like URLs or team credits.

---

# 🚀 EduNext AI

*An AI-powered personalized learning platform built in a 6-hour hackathon.*
<p>
<img src="https://github.com/developer-jashuva/BVCRCSEHT08/blob/main/landingPage1.jpg" alt="Alt text for the image" width="400">

  <img src="https://github.com/developer-jashuva/BVCRCSEHT08/blob/main/landingPage2.jpg" alt="Alt text for the image" width="400">
</p>
---

## 🌟 Overview

EduNext AI is a **full-stack educational web application** that provides:

* **Personalized learning path recommendations**
* **Performance prediction** from user engagement
* **Adaptive difficulty quizzes** that get easier/harder based on progress
* **Learning style identification** to tailor course suggestions
* An integrated **AI chatbot** for instant Q\&A and guidance

---

## 🏆 Hackathon Achievement

Built in **6 hours** by a team of 5 developers during EngiUthsav Hackathon.
Our goal was to create an **intelligent learning platform** that adapts to each student’s needs using simple yet powerful rule-based AI.

---

## ✨ Features

| Feature                     | Description                                                             |
| --------------------------- | ----------------------------------------------------------------------- |
| 🎯 Personalized Path        | Recommends courses based on quiz scores & progress                      |
| 📊 Performance Prediction   | Predicts success from engagement metrics                                |
| 🧩 Adaptive Quizzes         | Adjusts difficulty dynamically                                          |
| 🧠 Learning Style Detection | Identifies visual / auditory / kinesthetic preferences                  |
| 💬 AI Chatbot               | Powered by Gemini/OpenAI for instant Q\&A                               |
| 🌐 Dynamic Content          | Live quiz questions fetched from [Open Trivia DB](https://opentdb.com/) |

---

## 🖼️ Screenshots

| Instructor Dashboard                       | Student Dashboard                      | Chatbot                            |
| ---------------------------------- | -------------------------------------- | ---------------------------------- |
|<img src="https://github.com/developer-jashuva/BVCRCSEHT08/blob/main/teacherDashboard.jpg" alt="image" width="300"> |<img src="https://github.com/developer-jashuva/BVCRCSEHT08/blob/main/studentDashboard.jpg" alt="image" width="300"> | <img src="https://github.com/developer-jashuva/BVCRCSEHT08/blob/main/chatBot.jpg" alt="image" width="300"> |


---

## 🛠️ Tech Stack

| Layer          | Technology                                                   |
| -------------- | ------------------------------------------------------------ |
| **Frontend**   | React, Vite, Tailwind CSS, Axios                             |
| **Backend**    | Node.js, Express                                             |
| **Database**   | MongoDB (Compass for local dev)                              |
| **AI / APIs**  | Open Trivia DB (quiz data), Google Gemini / OpenAI (chatbot) |
| **Deployment** | Frontend: Vercel • Backend: Render                           |

---

## ⚡ Quick Start

### Prerequisites

* Node.js ≥ 18
* MongoDB running locally (or Atlas)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/edunext-ai.git
cd edunext-ai
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=mongodb://127.0.0.1:27017/edunext
PORT=4000
GEMINI_API_KEY=your_key_here   # if using AI chatbot
```

Start server:

```bash
npm run start
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📂 Folder Structure

```
edunext-ai/
├─ backend/
│  ├─ models/        # User, Course, Enrollment
│  ├─ routes/        # auth, courses, enrollments, quiz, chatbot
│  └─ server.js
├─ frontend/
│  ├─ src/pages/     # Landing, Login, Dashboards
│  ├─ src/components # Navbar, CourseCard, ChatBot, etc.
│  └─ main.jsx
└─ README.md
```

---

## 👥 Team Members

| Name     | Role            |
| -------- | --------------- |
| Jashuva  | Full-stack      |
| Aditya   | Backend         |
| Daswanth | Frontend        |
| Bhuvana  | UI/UX           |
| Bablu    | API Integration |


---

## 🔮 Future Improvements

* Secure authentication (JWT or OAuth)
* Real ML models for performance prediction
* Admin panel for course management
* Gamification (points, badges, leaderboards)

---

## 📜 License

MIT License © 2025 \[Your Team Name]

---

### ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub and share your feedback!

---

Would you like me to also draft a **LinkedIn announcement post** based on this README?
