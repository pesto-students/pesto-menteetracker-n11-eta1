import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import { authCheckerSelector } from '../../middleware/authCheckerSlice'

import useInputFormField from '../../../../shared/hooks/useInputFormField';
import { signInSelector, signInWithEmailPasswordLoadFlow, signInWithGoogleLoadFlow } from '../../middleware/signInSlice'
import AppNavBar from "../../components/nav-bar/AppNavBar"

const SignIn = () => {
    const dispatch = useDispatch()
    const { authError } = useSelector(signInSelector)
    const navigate = useNavigate()
    const email = useInputFormField()
    const password = useInputFormField()
    const { loading, user } = useSelector(authCheckerSelector)

    useEffect(() => {
        if (user)
            navigate("/admin/dashboard")
    }, [user, loading])

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(signInWithEmailPasswordLoadFlow({
            email: email.value,
            password: password.value
        }))
    }

    const googleSignIn = () => {
        dispatch(signInWithGoogleLoadFlow())
    }
    return (
        <div className="">
            <AppNavBar />
            <div className="w-full max-w-xs mt-20 ml-60">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h5 className="text-2xl m-4">Sign In</h5>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">Email</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="mname"
                            type="text"
                            value={email.value}
                            onChange={email.onChange}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">Password</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="password"
                            type="password"
                            value={password.value}
                            onChange={password.onChange}
                            required
                        />
                    </div>
                    <div className="mt-5">
                        <button className="btn">Submit</button>
                    </div>
                    <div className="mt-5">
                        <button className="btn" onClick={googleSignIn}>Google SignIn</button>
                    </div>
                </form>

                <div>
                    {authError ? <p>{authError}</p> : null}
                </div>
            </div>
        </div>

    );
}

export default SignIn;