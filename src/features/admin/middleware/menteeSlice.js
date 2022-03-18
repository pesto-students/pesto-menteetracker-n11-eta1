import { createSlice } from '@reduxjs/toolkit'
import { apiGetAllmentee } from '../api/api'

export const initialState = {
    loading: false,
    error: null,
    menteeList: [],
    batcheList: []
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
            console.log("payload :", payload)
            state.menteeList = payload.mentee
            if (!payload.isFilter) {
                var options = new Set()
                payload.mentee?.map(mentee => {
                    options.add(mentee.batch)
                })
                state.batcheList = [...options];
            }
        },
        menteeLoadFailure: (state, { payload }) => {
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
            dispatch(menteeLoadSuccess({ mentee, isFilter: false }))
        } catch (error) {
            dispatch(menteeLoadFailure())
        }
    }
}

export const menteeSearchFlow = (searchedStr) => {
    return async (dispatch) => {
        dispatch(menteeLoading())
        try {
            var mentee = await apiGetAllmentee();
            mentee = mentee.filter(ele => ele.email.toLowerCase().startsWith(searchedStr.toLowerCase()))
            dispatch(menteeLoadSuccess({ mentee, isFilter: true }))
        } catch (error) {
            dispatch(menteeLoadFailure())
        }
    }
}

export const menteeFilterFlow = (filter) => {
    return async (dispatch) => {
        dispatch(menteeLoading())
        try {
            var mentee = await apiGetAllmentee();
            if (filter !== "All")
                mentee = mentee.filter(ele => ele.batch === filter)
            dispatch(menteeLoadSuccess({ mentee, isFilter: true }))
        } catch (error) {
            dispatch(menteeLoadFailure())
        }
    }
}

export const menteeSortFlow = (isSort) => {
    return async (dispatch) => {
        dispatch(menteeLoading())
        try {
            var mentee = await apiGetAllmentee();
            if (isSort) {
                mentee = mentee.sort((a, b) => a.email.localeCompare(b.email))
                mentee.reverse()
            } else {
                mentee = mentee.sort((a, b) => a.email.localeCompare(b.email))
            }
            dispatch(menteeLoadSuccess({ mentee, isFilter: true }))
        } catch (error) {
            dispatch(menteeLoadFailure())
        }
    }
}
