# 🏢 Property Rental, Maintenance & Amenity Management System

A full-stack web application built using **React**, **Vite**, **Node.js**, and **Express.js** that simulates a property management platform. The project enables tenants and property owners to manage maintenance requests, amenities, and bookings while demonstrating frontend-backend communication through REST APIs.

---

## 📖 Project Overview

This project was developed to understand the fundamentals of full-stack web development. It includes a React frontend with multiple pages and an Express backend exposing REST APIs. The application demonstrates routing, component-based architecture, state management, API communication using Fetch API, and backend development using Express.

---

## ✨ Features

- 🔐 Login Interface
- 🏠 Home Page
- 👤 Tenant Dashboard
- 👨‍💼 Owner Dashboard
- 🔧 Maintenance Request Module
- 🏊 Amenities Page
- 📅 Bookings Page
- 🧭 Navigation using React Router
- 🌐 REST APIs using Express.js
- 🔄 Frontend ↔ Backend communication using Fetch API
- 📦 JSON-based API responses
- 🌍 Cross-Origin Resource Sharing (CORS) configuration

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- React Router
- JavaScript (ES6+)
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- CORS

### Development Tools

- Visual Studio Code
- Git
- GitHub
- npm

---

## 📂 Project Structure

```text
PROPERTY-MANAGEMENT/
│
├── backend/
│   ├── models/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   └── navbar.jsx
│   │
│   ├── pages/
│   │   ├── home.jsx
│   │   ├── login.jsx
│   │   ├── TenantDashboard.jsx
│   │   ├── OwnerDashboard.jsx
│   │   ├── Maintenance.jsx
│   │   ├── Amenities.jsx
│   │   └── Bookings.jsx
│   │
│   ├── styles/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔄 Application Architecture

```text
                 User
                   │
                   ▼
          React Frontend (Vite)
                   │
             Fetch API Request
                   │
                   ▼
        Express.js REST API Server
                   │
             JSON Response
                   │
                   ▼
             React Updates UI
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Backend status check |
| GET | `/hello` | Test API endpoint |
| GET | `/maintenance` | Returns maintenance request data |

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/your-username/property-management.git
```

### Install Frontend Dependencies

```bash
npm install
```

### Start Frontend

```bash
npm run dev
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Start Backend

```bash
node server.js
```

---

## 📚 Concepts Implemented

This project helped in understanding:

- React Components
- React Router
- State Management using useState
- Props
- Conditional Rendering
- REST APIs
- Express.js
- Backend Architecture
- Fetch API
- JSON Responses
- CORS
- Frontend ↔ Backend Communication
- Client-Server Architecture

---

## 🔮 Future Enhancements

- MongoDB Database Integration
- JWT Authentication
- User Registration
- CRUD Operations
- Persistent Data Storage
- Role-Based Access Control
- Improved Dashboard UI
- Booking Management System
- Real-Time Notifications

---

## 📸 Screenshots

Add screenshots of:

- Login Page
- Home Page
- Tenant Dashboard
- Owner Dashboard
- Maintenance Page
- Amenities Page
- Bookings Page

---

## 👨‍💻 Author

**Nandakishore PV**

B.Tech Computer Science Engineering

PES University

GitHub: https://github.com/Nandupv10
