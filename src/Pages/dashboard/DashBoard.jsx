import React from 'react'
import { useAuthStore } from '../../store/authStore'

const DashBoard = () => {
  const user = useAuthStore((state)=> state.user)
  return (
    <div>
     Welcome {user ? user.name === "" ? "Parent" : user.name : "guest"}
    </div>
  )
}

export default DashBoard
