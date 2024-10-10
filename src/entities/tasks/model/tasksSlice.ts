import {createSlice} from '@reduxjs/toolkit'
import {taskGetReducer, tasksFetchReducer} from "./tasksReducer.ts";



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
        setTasks(state, action) {
            state.tasks = action.payload
        },
        // getTask(state, action){
        //     state.selectedTask = state.tasks.find(task => task.Id === action.payload.Id)
        // }
    },
    extraReducers: (builder) => {
        tasksFetchReducer(builder)
        taskGetReducer(builder)
    }
})


export const {
    setTasks,
    getTask,
    setActiveTask,
} = tasksSlice.actions

export default tasksSlice.reducer