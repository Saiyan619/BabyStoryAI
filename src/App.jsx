import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './globalcomponents/Navbar'
import Home from './Pages/hompage/Home'
import Login from './Pages/loginPage/Login';
import SignUp from './Pages/signupPage/SignUp';
import ProtectedRoutes from './routes/ProtectedRoutes';
import DashBoard from './Pages/dashboard/DashBoard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
