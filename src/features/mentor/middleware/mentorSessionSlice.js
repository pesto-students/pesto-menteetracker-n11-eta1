import { createSlice } from '@reduxjs/toolkit'
import { apiGetAllMentorSession } from '../api/api'

export const initialState = {
    loading: false,
    error: null,
    mentorSessionList: []
}

const mentorSessionSlice = createSlice({
    name: "mentorSession",
    initialState: initialState,
    reducers: {
        mentorSessionLoading: (state) => {
            state.loading = true
        },
        mentorSessionLoadSuccess: (state, { payload }) => {
            state.loading = false
            state.error = null
            state.mentorSessionList = payload
        },
        mentorSessionLoadFailure: (state, {payload}) => {
            state.loading = false
            state.error = payload
        }

    }

})

export const { mentorSessionLoading, mentorSessionLoadSuccess, mentorSessionLoadFailure } = mentorSessionSlice.actions
export const mentorSessionSelector = (state) => state.mentorSession
export const mentorSessionReducer = mentorSessionSlice.reducer

export const mentorSessionLoadFlow = () => {
    return async (dispatch) => {
        dispatch(mentorSessionLoading())
        try {
            const user = window.localStorage.getItem('user')
            const mentorSession = await apiGetAllMentorSession("raghu")
            dispatch(mentorSessionLoadSuccess(mentorSession))
        } catch (error) {
            console.log(error)
            dispatch(mentorSessionLoadFailure())
        }
    }
}
