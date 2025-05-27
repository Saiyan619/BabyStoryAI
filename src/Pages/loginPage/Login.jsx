import React from 'react'
import Navbar from '../../globalcomponents/Navbar'
import { useAuthStore } from '../../store/authStore'

const Login = () => {
    const user = useAuthStore((state)=> state.user)
    console.log(user)
  return (
      <div>
          <Navbar />
      Login
      Login
    </div>
  )
}

export default Login
