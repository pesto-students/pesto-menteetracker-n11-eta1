import { createSlice } from '@reduxjs/toolkit'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { apiAddUser, apiCreateMentee, apiCreateMentor } from "../api/api"

import firebaseApp from '../../../config/firebase';
import { menteeLoadFlow } from "features/admin/middleware/menteeSlice";
import { mentorLoadFlow } from "features/admin/middleware/mentorSlice";
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
                credentials.email
            ).then(async (res) => {
                console.log("res : ", res)
                const user = {
                    "uid": res.user.uid,
                    "email": res.user.email,
                    "roll": credentials.isMentee ? "mentee" : "mentor"
                }
                await apiAddUser(user)
                if (credentials.isMentee) {
                    // SignUp for mentee
                    const mentee = {
                        "uid": res.user.uid,
                        "email": credentials.email,
                        "batch": credentials.dbinput.batch,
                        "team": credentials.dbinput.team,
                    }
                    console.log(mentee)
                    const resp = await apiCreateMentee(mentee)
                    console.log(resp)
                    dispatch(menteeLoadFlow())
                } else {
                    // SignUp for mentor
                    const mentor = {
                        "uid": res.user.uid,
                        "email": credentials.email,
                        "name": credentials.name
                    }
                    console.log(mentor)
                    const resp = await apiCreateMentor(mentor)
                    console.log(resp)
                    dispatch(mentorLoadFlow())
                }
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
