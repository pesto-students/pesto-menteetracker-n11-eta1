import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, withRouter } from "react-router-dom"

import { authCheckerSelector, authCheckerLoadFlow } from '../../features/auth/middleware/authCheckerSlice'
import SignIn from '../../features/auth/components/sign-in/SignIn'
import LandingPage from '../../features/auth/LandingPage';
import AdminPage from "../../features/admin/AdminPage";

const appAuthenticator = (WrappedComponent) => {


    const AuthComponent = (props) => {
        const history = useHistory()
        const dispatch = useDispatch()
        const { loading, user } = useSelector(authCheckerSelector)

        useEffect(() => {
            dispatch(authCheckerLoadFlow())
        }, [dispatch])

        const getUi = () => {
            if (loading) return <div>Loading Progress</div>
            if (user) {
                return <AdminPage/>
                // return <Redirect to='/admin' /> 
                // history.push("admin")
            } else {
                // return <SignIn></SignIn>
                return <WrappedComponent {...props} />
            }
        }
        return (
            <div>
                { getUi()}
            </div>
        );
    }

    return AuthComponent;
}

export default appAuthenticator;