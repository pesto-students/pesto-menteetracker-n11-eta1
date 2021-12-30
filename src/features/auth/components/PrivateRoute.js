import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux"

import { signInSelector } from '../middleware/signInSlice'


const AccessDenied = () => {
    return (
        <div>Access Denied</div>
    )
}

const PrivateRoute = ({ component: RouteComponent, roles }) => {
    const { authError, user } = useSelector(signInSelector)

    const userData = JSON.parse(window.localStorage.getItem('user'))
    console.log("private user", user)
    const isAuthenticated = user ? true : false;
    const userHasRequiredRole = userData && roles.includes(userData.roll) ? true : false

    if (isAuthenticated && userHasRequiredRole) {
        return <RouteComponent />
    }

    if (isAuthenticated && !userHasRequiredRole) {
        return <AccessDenied />
    }

    return <Navigate to="/" />

}


export default PrivateRoute;