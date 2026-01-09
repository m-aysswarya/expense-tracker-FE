import React from "react"
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom"
import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"
import Dashboard from "./pages/Dashboard/Dashboard"
import Income from "./pages/Dashboard/Income"
import Expense from "./pages/Dashboard/Expense"
import UserProvider from "./context/user.context"
import { Toaster } from "react-hot-toast"
import EmailVerification from "./pages/Auth/EmailVerification"
import AuthRedirect from "./components/AuthRedirect"
import LandingPage from "./pages/Landing/LandingPage"
import ForgotPassword from "./pages/Auth/ForgotPassword"
import ResetPassword from "./pages/Auth/ResetPassword"
function App() {


  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<><AuthRedirect /><Login /></>} />
            <Route path="/signup" element={<><AuthRedirect /><SignUp /></>} />
            <Route path="/verify-email" element={<EmailVerification />} />
            <Route path="/forgot-password" element={<><AuthRedirect /><ForgotPassword /></>} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
          </Routes>
        </Router>
      </div>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: '13px'
          },
        }}
      />
    </UserProvider>
  )
}

export default App
