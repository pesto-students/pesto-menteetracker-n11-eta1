import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import useInputFormField from '../../../../shared/hooks/useInputFormField';
import { signUpSelector, createUserWithEmailPasswordLoadFlow } from '../../middleware/signUpSlice'


const SignUp = () => {
    const dispatch = useDispatch()
    const { authError } = useSelector(signUpSelector)
    const email = useInputFormField()
    const password = useInputFormField()

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(createUserWithEmailPasswordLoadFlow({ email: email.value, password: password.value }))
    }

    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit} >
                <h5 className="grey-text text-darken-3">Sign Up</h5>
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
        </div>
    );
}

export default SignUp;