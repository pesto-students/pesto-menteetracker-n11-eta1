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
            <div>
                {authError ? <p>{authError}</p> : null}
            </div>
        </div>
    );
}

export default SignUp;