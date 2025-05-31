import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './globalcomponents/Navbar'
import Home from './Pages/hompage/Home'
import Login from './Pages/loginPage/Login';
import SignUp from './Pages/signupPage/SignUp';
import ProtectedRoutes from './routes/ProtectedRoutes';
import DashBoard from './Pages/dashboard/DashBoard';
import VerifyEmail from './Pages/verifyEmail/VerifyEmail';
import ForgotPassword from './Pages/forgotPassword/ForgotPassword';
import ResetPassword from './Pages/resetPassword/ResetPassword';
import AuthCallback from './Pages/auth/AuthCallback';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/auth/callback" element={<AuthCallback />} />


        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <DashBoard />
            </ProtectedRoutes>
          }
        />
        {/* Add more protected routes as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
