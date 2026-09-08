# 💰 Expense Tracker

A full-stack **Expense Tracker application** designed to help users manage, monitor, and organize their personal expenses through a simple and responsive interface.

The application provides secure user authentication, expense management, and a structured dashboard for tracking financial activity.

---

## 🚀 Features

* 🔐 **User Authentication**

  * Secure user registration and login
  * JWT-based authentication
  * Protected routes for authenticated users

* 💸 **Expense Management**

  * Add new expenses
  * View expense records
  * Update existing expenses
  * Delete expenses

* 📊 **Expense Tracking**

  * Track spending across different expenses
  * View organized expense records
  * Monitor overall spending

* 🛡️ **Secure Backend**

  * Password hashing using bcrypt
  * Authentication middleware
  * Server-side input validation

* 📱 **Responsive UI**

  * Mobile-friendly design
  * Responsive layout for desktop, tablet, and mobile devices

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Express Validator

### Development Tools

* Git
* GitHub
* Postman
* VS Code

---

## 🏗️ Project Architecture

```text
Expense-Tracker/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🔐 Authentication

Authentication is implemented using **JWT (JSON Web Tokens)**.

### Authentication Flow

1. User registers an account.
2. Password is securely hashed using **bcrypt** before storing it in MongoDB.
3. User logs in using their email and password.
4. Backend verifies the credentials.
5. A JWT token is generated after successful authentication.
6. Protected API routes verify the token using authentication middleware.
7. Only authenticated users can access their expense data.

---

## 📡 API Overview

### Authentication

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login user          |

### Expenses

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| POST   | `/api/expenses`     | Create an expense |
| GET    | `/api/expenses`     | Get user expenses |
| PUT    | `/api/expenses/:id` | Update an expense |
| DELETE | `/api/expenses/:id` | Delete an expense |

> Update the endpoint names above if your actual backend routes are different.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd expense-tracker
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Make sure you replace the placeholder values with your actual configuration.

---

## ▶️ Running the Application

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The application will then be available through the local development URL provided by Vite.

---

## 📸 Screenshots

### Dashboard

*Add your dashboard screenshot here.*

### Add Expense

*Add your expense form screenshot here.*

### Expense List

*Add your expense list screenshot here.*

---

## 🔒 Security

The application follows common backend security practices:

* JWT-based authentication
* Password hashing with bcrypt
* Protected API routes
* Authentication middleware
* Server-side request validation
* Environment variables for sensitive configuration

---

## 🎯 Project Objectives

This project was developed to gain practical experience with:

* Full-stack web application development
* RESTful API development
* JWT authentication and authorization
* MongoDB database integration
* CRUD operations
* React state management
* API integration using Axios
* Responsive UI development
* Backend middleware and validation

---

## 🔮 Future Improvements

* 📈 Expense analytics and charts
* 🗓️ Filter expenses by date
* 🏷️ Expense categories
* 📊 Monthly and yearly spending reports
* 📥 Export expenses as CSV/PDF
* 🔔 Budget and spending notifications
* 🌙 Dark mode

---

## 👨‍💻 Author

**Sahil Patil**

* GitHub: `SAHIL-DEV-1702`

---

## 📄 License

This project is licensed under the **MIT License**.
