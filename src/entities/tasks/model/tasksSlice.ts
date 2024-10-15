import {createSlice} from '@reduxjs/toolkit'
import {
    commentAddReducer,
    commentRemoveReducer,
    taskCreateReducer,
    taskGetReducer,
    tasksFetchReducer
} from "./tasksReducer.ts";



const initialState = {
    tasks: [],
    selectedTask : null,
    loading: '',
    error: null,
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks(state, action){
            state.tasks = action.payload
        }

    },
    extraReducers: (builder) => {
        tasksFetchReducer(builder)
        taskGetReducer(builder)
        taskCreateReducer(builder)
        commentAddReducer(builder)
        commentRemoveReducer(builder)

    }
})


export const {
    setTasks,
} = tasksSlice.actions

export default tasksSlice.reducer