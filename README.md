# 🏢 Real-Time Property Rental, Maintenance & Amenity Management Platform

A full-stack web application developed using **React**, **Node.js**, and **Express** to simplify property management by allowing tenants to submit maintenance requests and access property-related services through a centralized platform.

---

## 📌 Project Overview

This project provides a simple property management system where tenants can view dashboards, submit maintenance requests, explore amenities, and manage bookings. The application demonstrates communication between a React frontend and an Express backend using REST APIs.

---

## 🚀 Features

- 🔐 Login Page
- 🏠 Tenant Dashboard
- 👨‍💼 Owner Dashboard
- 🔧 Maintenance Request Module
- 🏊 Amenities Page
- 📅 Bookings Page
- 🌐 React Router Navigation
- ⚡ Express REST APIs
- 🔄 Frontend ↔ Backend Communication using Fetch API
- 🌍 CORS Enabled Backend

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- React Router
- CSS

### Backend
- Node.js
- Express.js
- CORS

### Database
- MongoDB *(Planned for future implementation)*

### Future Improvements
- MongoDB Integration
- JWT Authentication
- Persistent Data Storage
- User Roles
- Booking Management
- Real-time Updates

---

## 📂 Project Structure

```
project/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── backend/
    ├── server.js
    ├── package.json
    └── node_modules/
```

---

## 🔄 Application Flow

```
User
   │
   ▼
React Frontend
   │
Fetch API
   │
Express Backend
   │
REST API
   │
JSON Response
   │
React UI
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Backend Status |
| GET | `/hello` | Test API |
| GET | `/maintenance` | Returns maintenance requests |

---

## 📸 Screenshots

*(Add screenshots of your Login Page, Tenant Dashboard, Maintenance Page, and Owner Dashboard here.)*

---

## ▶️ Installation

### Clone Repository

```bash
git clone <repository-link>
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
node server.js
```

---

## 📖 Learning Outcomes

This project helped in understanding:

- React Components
- React Router
- State Management using useState
- REST APIs
- Express.js
- Backend Architecture
- CORS
- Fetch API
- JSON Communication
- Frontend and Backend Integration

---

## 📌 Future Scope

- MongoDB Database Integration
- User Authentication using JWT
- CRUD Operations
- Role-Based Access
- Real-Time Notifications
- Improved UI/UX

---

## 👨‍💻 Author

**Nandakishore PV**

B.Tech Computer Science Engineering

PES University
