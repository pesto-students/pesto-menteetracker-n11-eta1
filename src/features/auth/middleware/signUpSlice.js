import { createSlice } from '@reduxjs/toolkit'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import firebaseApp from '../../../config/firebase';
const auth = getAuth(firebaseApp);

export const initialState = {
    authError: null
}

const signUpSlice = createSlice({
    name: "signUp",
    initialState: initialState,
    reducers: {
        signUpError: (state, { payload }) => {
            console.log("create user failure", payload)
            state.authError = payload
        },
        signUpSuccess: (state) => {
            console.log("create user success")
            state.authError = null
        },

    }

})

export const { signUpError, signUpSuccess } = signUpSlice.actions
export const signUpSelector = (state) => state.signUp
export const signUpReducer = signUpSlice.reducer

export const createUserWithEmailPasswordLoadFlow = (credentials) => {
    return async (dispatch) => {
        try {
            console.log(credentials)
            createUserWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password
            ).then(() => {
                dispatch(signUpSuccess())
            }).catch((err) => {
                console.log(err.code)
                dispatch(signUpError(err.code))
            });
        } catch (err) {
            console.log(err.code)
            dispatch(signUpError(err.code))
        }
    }
}
