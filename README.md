# 📝 Todo List Application

A full-stack **Todo List App** built with **React**, **Express.js**, and **MySQL**, containerized using **Docker Compose**. Easily add, mark, and delete tasks with a clean and responsive user interface.

---

## 🛠️ Tech Stack

**Frontend:**
- React (with functional components & hooks)
- CSS3 (fully custom styled)
- Bootstrap (optional for quick styling)

**Backend:**
- Express.js (Node.js)
- RESTful API
- CORS & JSON middleware

**Database:**
- MySQL

**DevOps:**
- Docker & Docker Compose
- Multi-stage Docker build for production-ready frontend

---

## 📁 Project Structure

Todo-app/
├── backend/ # Express backend
│ ├── db.js # MySQL connection
│ ├── routes/ # REST API routes
│ └── server.js
├── frontend/ # React frontend
│ ├── public/ # index.html
│ ├── src/
│ │ ├── api/ # Axios API calls
│ │ ├── App.js
│ │ └── App.css
├── docker-compose.yml # Multi-container setup
├── .env # Environment variables (MySQL)
└── README.md # This file

** to run the app use :

-docker-compose up --build

Frontend: http://localhost:3000
Backend API: http://localhost:5000/api/todos
MySQL: Port 3306
