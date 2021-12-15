import { createSlice } from '@reduxjs/toolkit'
import { apiGetAllmentee } from '../api/api'

export const initialState = {
    loading: false,
    error: null,
    menteeList: []
}

const menteeSlice = createSlice({
    name: "mentee",
    initialState: initialState,
    reducers: {
        menteeLoading: (state) => {
            state.loading = true
        },
        menteeLoadSuccess: (state, { payload }) => {
            state.loading = false
            state.error = null
            state.menteeList = payload
        },
        menteeLoadFailure: (state, {payload}) => {
            state.loading = false
            state.error = payload
        }

    }

})

export const { menteeLoading, menteeLoadSuccess, menteeLoadFailure } = menteeSlice.actions
export const menteeSelector = (state) => state.mentee
export const menteeReducer = menteeSlice.reducer

export const menteeLoadFlow = () => {

    return async (dispatch) => {
        dispatch(menteeLoading())
        try {
            const mentee = await apiGetAllmentee()
            dispatch(menteeLoadSuccess(mentee))
        } catch (error) {
            dispatch(menteeLoadFailure())
        }
    }
}
