import { createSlice } from '@reduxjs/toolkit'
import { apiGetAllBatches } from '../api/api'

export const initialState = {
    loading: false,
    error: null,
    batchList: []
}

const batchSlice = createSlice({
    name: "batch",
    initialState: initialState,
    reducers: {
        batchLoading: (state) => {
            state.loading = true
        },
        batchLoadSuccess: (state, { payload }) => {
            state.loading = false
            state.error = null
            console.log("batches", payload)
            state.batchList = payload
        },
        batchLoadFailure: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }

    }

})

export const { batchLoading, batchLoadSuccess, batchLoadFailure } = batchSlice.actions;
export const batchSelector = (state) => state.batch;
export const batchReducer = batchSlice.reducer;

export const batchLoadFlow = () => {
    return async (dispatch) => {
        dispatch(batchLoading())
        try {
            const batches = await apiGetAllBatches();
            dispatch(batchLoadSuccess(batches))
        } catch (error) {
            console.log(error)
            dispatch(batchLoadFailure())
        }
    }
}
