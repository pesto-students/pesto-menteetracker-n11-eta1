import { createSlice } from '@reduxjs/toolkit'
import { apiGetAlladminTeam } from '../api/api'

export const initialState = {
    loading: false,
    error: null,
    adminTeamList: []
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
            state.adminTeamList = payload
        },
        adminTeamLoadFailure: (state, {payload}) => {
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
            var adminTeam = await apiGetAlladminTeam()
            adminTeam = adminTeam.filter(ele => ele.batch.toLowerCase().startsWith(searchedStr.toLowerCase()))
            console.log(adminTeam)
            dispatch(adminTeamLoadSuccess(adminTeam))
        } catch (error) {
            dispatch(adminTeamLoadFailure())
        }
    }
}