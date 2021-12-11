import { createSlice } from '@reduxjs/toolkit'
import { apiGetMentorProfile } from '../api/api'

export const initialState = {
    loading: false,
    error: null,
    mentor: null,
}

const mentorProfileSlice = createSlice({
    name: "mentorProfile",
    initialState: initialState,
    reducers: {
        mentorProfileLoading: (state) => {
            state.loading = true
        },
        mentorProfileLoadSuccess: (state, { payload }) => {
            state.loading = false
            state.error = null
            state.mentor = payload
        },
        mentorProfileLoadFailure: (state, {payload}) => {
            state.loading = false
            state.error = payload
        }

    }

})

export const { mentorProfileLoading, mentorProfileLoadSuccess, mentorProfileLoadFailure } = mentorProfileSlice.actions
export const mentorProfileSelector = (state) => state.mentorProfile
export const mentorProfileReducer = mentorProfileSlice.reducer

export const mentorProfileLoadFlow = () => {

    return async (dispatch) => {
        dispatch(mentorProfileLoading())
        try {
            const user = window.localStorage.getItem('user')
            const mentorProfile = await apiGetMentorProfile("raghu")
            dispatch(mentorProfileLoadSuccess(mentorProfile[0]))
        } catch (error) {
            console.log(error)
            dispatch(mentorProfileLoadFailure())
        }
    }
}
