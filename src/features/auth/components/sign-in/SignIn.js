import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import useInputFormField from '../../../../shared/hooks/useInputFormField';
import { signInSelector, signInWithEmailPasswordLoadFlow, signInWithGoogleLoadFlow } from '../../middleware/signInSlice'
import AppNavBar from "../../components/nav-bar/AppNavBar"
import "./style.css"

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const email = useInputFormField()
    const password = useInputFormField()
    const { authError, user } = useSelector(signInSelector)

    useEffect(() => {
        if (user && user.roll === "admin")
            navigate("/admin/dashboard")
        else if (user && user.roll === "mentor")
            navigate("/mentor/dashboard")
    }, [user])

    const handleSubmit = async (event) => {
        event.preventDefault();
        await dispatch(signInWithEmailPasswordLoadFlow({
            email: email.value,
            password: password.value
        }))
    }

    const googleSignIn = () => {
        dispatch(signInWithGoogleLoadFlow())
    }
    return (
        <div className="bg-gray-100 flex h-screen">
            <div className="ml-64 mt-80 text-2xl text-indigo-900">Pesto Mentee Tracker</div>
            <div className="ml-64 mt-20">
                <div className='window'>
                    <div className='overlay'></div>
                    <div className='content'>
                        <div className='welcome'>Pesto Login</div>
                        <div className='subtitle'>Upskill...</div>
                        <div className='input-fields'>
                            <input
                                type='email'
                                placeholder='Email'
                                className='input-line full-width'
                                name="email"
                                value={email.value}
                                onChange={email.onChange}
                            ></input>
                            <input
                                type='password'
                                placeholder='Password'
                                className='input-line full-width'
                                name="password"
                                value={password.value}
                                onChange={password.onChange}
                            ></input>
                        </div>
                        <div className="h-24"></div>
                        <div><button className='ghost-round full-width'
                            onClick={handleSubmit}
                        >Login</button></div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SignIn;