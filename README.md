# 🛠️ JobBoard Backend API

This is the backend API for the JobBoard application built using **Node.js, Express, and MongoDB**.

---

## 🚀 Features

- Create job posts
- Get all jobs
- Get single job
- MongoDB database integration
- REST API

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

---

## 📦 Installation

```bash
npm install

▶️ Run Server
node server.js

or (dev mode)
npm run dev

Server runs on:
http://localhost:5000

🔗 Environment Variables

Create .env file:
MONGO_URI=mongodb+srv://2021sp086_db_user:d4VJHlO84nAwWFkc@cluster0.rrj9ce9.mongodb.net/jobboard?retryWrites=true&w=majority&appName=Cluster0

PORT=5000

📡 API Endpoints
Create Job
POST /api/jobs
Get All Jobs
GET /api/jobs
Get Job by ID
GET /api/jobs/:id

🚀 Deployment
Backend: Railway
MongoDB: MongoDB Atlas