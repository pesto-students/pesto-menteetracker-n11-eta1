import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import BackgroundCurves from '../assets/layered-waves-haikei.svg'

import { authCheckerSelector } from '../../middleware/authCheckerSlice'

import useInputFormField from '../../../../shared/hooks/useInputFormField';
import { signInSelector, signInWithEmailPasswordLoadFlow, signInWithGoogleLoadFlow } from '../../middleware/signInSlice'


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
        <div className='container'>
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
                    <div className='spacing'>or continue with
                        <button className='highlight' onClick={googleSignIn}>Google</button>
                    </div>
                    <div><button className='ghost-round full-width'
                        onClick={handleSubmit}
                    >Login</button></div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;