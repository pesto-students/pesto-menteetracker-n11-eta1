import { createSlice } from '@reduxjs/toolkit'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import firebaseApp from '../../../config/firebase';
import { authCheckerLoadFlow } from '../middleware/authCheckerSlice'

const auth = getAuth(firebaseApp);

export const initialState = {
    authError: null
}

const signInSlice = createSlice({
    name: "signIn",
    initialState: initialState,
    reducers: {
        signInError: (state, { payload }) => {
            console.log("sign in failure", payload)
            state.authError = payload
        },
        signInSuccess: (state) => {
            console.log("sign in success")
            state.authError = null
        },

    }

})

export const { signInError, signInSuccess } = signInSlice.actions
export const signInSelector = (state) => state.signIn
export const signInReducer = signInSlice.reducer

export const signInWithEmailPasswordLoadFlow = (credentials) => {
    return async (dispatch) => {
        try {
            console.log(credentials)
            signInWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password
            ).then((res) => {
                dispatch(signInSuccess())
                dispatch(authCheckerLoadFlow())
            }).catch((err) => {
                console.log(err.code)
                dispatch(signInError(err.code))
            });
        } catch (err) {
            console.log(err.code)
            dispatch(signInError(err.code))
        }
    }
}

export const signInWithGoogleLoadFlow = () => {
    const googleProvider = new GoogleAuthProvider()
    return async (dispatch) => {
        signInWithPopup(auth, googleProvider).then((res) => {
            console.log(res.user)
            dispatch(signInSuccess())
        }).catch((error) => {
            console.log(error.message)
            dispatch(signInError("Google Login Failure"))
        })
    }
}