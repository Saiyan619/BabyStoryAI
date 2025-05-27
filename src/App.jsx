import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './hompage/components/Navbar'
import Home from './hompage/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        {/* Protected Routes */}
        {/* <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}
        {/* Add more protected routes as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
