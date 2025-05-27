import React from 'react'
import { useAuthStore } from '../store/authStore'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const user = useAuthStore((state) => state.user);
    if (!user) {

        return <Navigate to='/login' replace />
    }

    console.log("user exists:",user)

    return children
}

export default ProtectedRoutes
