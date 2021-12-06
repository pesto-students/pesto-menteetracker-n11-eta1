import { createSlice } from '@reduxjs/toolkit'
import { getAuth } from "firebase/auth"

import firebaseApp from '../../../config/firebase';
const auth = getAuth(firebaseApp);

export const initialState = {
    loading: false,
    user: null
}

const authCheckerSlice = createSlice({
    name: "authChecker",
    initialState: initialState,
    reducers: {
        authCheckerLoading: (state) => {
            state.loading = true
        },
        authCheckerLoadSuccess: (state, { payload }) => {
            state.loading = false
            state.user = payload
        },
        authCheckerLoadFailure: (state) => {
            state.loading = false
            state.user = null
        }

    }

})

export const { authCheckerLoading, authCheckerLoadSuccess, authCheckerLoadFailure } = authCheckerSlice.actions
export const authCheckerSelector = (state) => state.authChecker
export const authCheckerReducer = authCheckerSlice.reducer

export const authCheckerLoadFlow = () => {
    return async (dispatch) => {
        dispatch(authCheckerLoading())
        try {
            auth.onAuthStateChanged(authUser => {
                if (authUser) {
                    // console.log(authUser.email)
                    dispatch(authCheckerLoadSuccess({ email: authUser.email }))
                }
                else
                    dispatch(authCheckerLoadFailure())
            })
        } catch (error) {
            console.log(error)
            dispatch(authCheckerLoadFailure())
        }
    }
}
