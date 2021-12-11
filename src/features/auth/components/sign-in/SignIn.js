import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

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
        <div className="container">
            <form className="white" onSubmit={handleSubmit} >
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <br />
                <div className="input-field">
                    <input
                        className=""
                        name="Email"
                        type="text"
                        value={email.value}
                        onChange={email.onChange}
                        required
                    />
                    <label htmlFor="title">Email</label>
                </div>
                <div className="input-field">
                    <input
                        className=""
                        name="Email"
                        type="password"
                        value={password.value}
                        onChange={password.onChange}
                        required
                    />
                    <label htmlFor="title">Password</label>
                </div>
                <div className="input-field">
                    <button className="btn blue lighten-2">Submit</button>
                </div>
            </form>
            <br />
            <button onClick={googleSignIn}>Google SignIn</button>
            <div>
                {authError ? <p>{authError}</p> : null}
            </div>
        </div>
    );
}

export default SignIn;