import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

type ProtectedRouteProps = {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isAuthenticated } = useContext(UserContext) ?? {}
    const location = useLocation()

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children 
}
