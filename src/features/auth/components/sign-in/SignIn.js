import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import useInputFormField from '../../../../shared/hooks/useInputFormField';
import { signInSelector, signInWithEmailPasswordLoadFlow, signInWithGoogleLoadFlow } from '../../middleware/signInSlice'


const SignIn = () => {
    const dispatch = useDispatch()
    const { authError } = useSelector(signInSelector)
    const email = useInputFormField()
    const password = useInputFormField()

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
        <div>
            <form onSubmit={handleSubmit} >
                <label> Email:
                    <input
                        className=""
                        name="Email"
                        type="text"
                        value={email.value}
                        onChange={email.onChange}
                        required
                    />
                </label>
                <br />
                <label> Password:
                    <input
                        className=""
                        name="Email"
                        type="password"
                        value={password.value}
                        onChange={password.onChange}
                        required
                    />
                </label>
                <br />
                <button>Submit</button>
            </form>
            <button onClick={googleSignIn}>Google SignIn</button>
            <div>
                {authError ? <p>{authError}</p> : null}
            </div>
        </div>
    );
}

export default SignIn;