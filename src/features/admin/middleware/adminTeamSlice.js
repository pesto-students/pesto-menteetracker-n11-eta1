import { createSlice } from '@reduxjs/toolkit'
import { apiGetAlladminTeam } from '../api/api'

export const initialState = {
    loading: false,
    error: null,
    adminTeamList: [],
    adminBatchList: []
}

const adminTeamSlice = createSlice({
    name: "adminTeam",
    initialState: initialState,
    reducers: {
        adminTeamLoading: (state) => {
            state.loading = true
        },
        adminTeamLoadSuccess: (state, { payload }) => {
            state.loading = false
            state.error = null
            state.adminTeamList = payload.teams
            state.adminBatchList = payload.batches
        },
        adminTeamLoadFailure: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }

    }

})

export const { adminTeamLoading, adminTeamLoadSuccess, adminTeamLoadFailure } = adminTeamSlice.actions
export const adminTeamSelector = (state) => state.adminTeam
export const adminTeamReducer = adminTeamSlice.reducer

export const adminTeamLoadFlow = () => {

    return async (dispatch) => {
        dispatch(adminTeamLoading())
        try {
            const adminTeam = await apiGetAlladminTeam()
            dispatch(adminTeamLoadSuccess(adminTeam))
        } catch (error) {
            dispatch(adminTeamLoadFailure())
        }
    }
}


export const adminBatchSearchFlow = (searchedStr) => {
    return async (dispatch) => {
        dispatch(adminTeamLoading())
        try {
            const admin = await apiGetAlladminTeam()
            const teams = admin.teams.filter(ele => ele.batch.toLowerCase().startsWith(searchedStr.toLowerCase()))
            dispatch(adminTeamLoadSuccess({ teams, batches: admin.batches }))
        } catch (error) {
            dispatch(adminTeamLoadFailure())
        }
    }
}