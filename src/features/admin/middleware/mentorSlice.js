import { createSlice } from '@reduxjs/toolkit'
import { apiGetAllmentor } from '../api/api'

export const initialState = {
    loading: false,
    error: null,
    mentorList: []
}

const mentorSlice = createSlice({
    name: "mentor",
    initialState: initialState,
    reducers: {
        mentorLoading: (state) => {
            state.loading = true
        },
        mentorLoadSuccess: (state, { payload }) => {
            state.loading = false
            state.error = null
            state.mentorList = payload
        },
        mentorLoadFailure: (state, {payload}) => {
            state.loading = false
            state.error = payload
        }

    }

})

export const { mentorLoading, mentorLoadSuccess, mentorLoadFailure } = mentorSlice.actions
export const mentorSelector = (state) => state.mentor
export const mentorReducer = mentorSlice.reducer

export const mentorLoadFlow = () => {

    return async (dispatch) => {
        dispatch(mentorLoading())
        try {
            const mentor = await apiGetAllmentor()
            dispatch(mentorLoadSuccess(mentor))
        } catch (error) {
            console.log(error)
            dispatch(mentorLoadFailure())
        }
    }
}
