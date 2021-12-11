import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        data: []
    },
    reducers: {
        createTask: (state, action) => {
            state.data.push(action.payload)
        },
        updateTask: (state, action) => {
            const index = state.data.findIndex(task => task.id === action.payload.id)
            state.data[index] = action.payload
        },
        deleteTask: (state, action) => {
            const index = state.data.findIndex(task => task.id === action.payload)
            state.data.splice(index, 1)
        }
    }
})

export const { createTask, updateTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer