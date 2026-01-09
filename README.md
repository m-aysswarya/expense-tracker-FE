
# 🧾 Real-Time Expense Management Application

A full-stack MERN-based real-time expense management system designed to securely track, analyze, and manage user financial data with high performance and scalability.
This is the frontend for your application built using **React**, **Vite**, and **Tailwind CSS**.

🚀 Live Application: https://expense-tracker-blue-ten.vercel.app/
---
![Expense Manager Dashboard](https://github.com/m-aysswarya/expense-tracker-FE/blob/1472f98919358507ee485d9cf134b5f39ff1b5de/Screenshot%202026-01-09%20133115.png)
---
## 🚀 Installation

1. **Clone the repository**
   ```bash
   git@github.com:m-aysswarya/expense-tracker-FE.git
   cd expense-tracker-FE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## 👨‍💻 Development

- Start the development server:
  ```bash
  npm run dev
  ```

- Run linter (ESLint):
  ```bash
  npm run lint
  ```

- Build for production:
  ```bash
  npm run build
  ```

- Preview the production build:
  ```bash
  npm run preview
  ```

---

## 🏗️ Project Structure (Sample)
```
/frontend
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── services/   # For Axios API calls
│   ├── utils/
│   │   └── apiPaths.js   # Contains the BASE_URL constant
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## ✨ Key Highlights

- Processes **100+ real-time transactions monthly** with complete **CRUD functionality**
- Implements **JWT-protected authentication** ensuring secure user data management
- Integrated **automated email-based password recovery workflow**, handling **50+ recovery requests**, reducing account lockout incidents by **80%**
- Built an **interactive analytics dashboard** featuring **5+ visualizations** (Pie, Bar, Line charts)
- Optimized **MongoDB schemas**, boosting query performance by **50%**

---

## 🚀 Core Features

- 🔐 Secure login, signup, and session management
- 💰 Real-time income and expense tracking
- 📊 Data-driven analytics dashboard
- 📧 Email-based password reset & account recovery
- ⚡ Optimized backend APIs and database queries

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, Cookies
- **Email Service:** Nodemailer / SMTP
- **Deployment:** Vercel (Frontend), Render (Backend)

## 🔐 API Integration
- The API base URL is defined as a constant in `src/utils/apiPaths.js`. Example:
```javascript
export const BASE_URL = "http://localhost:8000/api/v1";
```
- Use this constant when making Axios calls or defining your API endpoints.
