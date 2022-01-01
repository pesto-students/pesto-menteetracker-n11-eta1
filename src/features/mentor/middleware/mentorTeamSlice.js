import { createSlice } from '@reduxjs/toolkit'
import { apiGetAllmentorTeam } from '../api/api'

export const initialState = {
    loading: false,
    error: null,
    mentorTeamList: []
}

const mentorTeamSlice = createSlice({
    name: "mentorTeam",
    initialState: initialState,
    reducers: {
        mentorTeamLoading: (state) => {
            state.loading = true
        },
        mentorTeamLoadSuccess: (state, { payload }) => {
            state.loading = false
            state.error = null
            state.mentorTeamList = payload
        },
        mentorTeamLoadFailure: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }

    }

})

export const { mentorTeamLoading, mentorTeamLoadSuccess, mentorTeamLoadFailure } = mentorTeamSlice.actions
export const mentorTeamSelector = (state) => state.mentorTeam
export const mentorTeamReducer = mentorTeamSlice.reducer

export const mentorTeamLoadFlow = () => {

    return async (dispatch) => {
        dispatch(mentorTeamLoading())
        try {
            const user = JSON.parse(window.localStorage.getItem('user'))
            const mentorTeam = await apiGetAllmentorTeam(user.email)
            dispatch(mentorTeamLoadSuccess(mentorTeam))
        } catch (error) {
            console.log(error)
            dispatch(mentorTeamLoadFailure())
        }
    }
}
