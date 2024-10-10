import {createSlice} from '@reduxjs/toolkit'
import {projectsReducer} from "./projectsReducer.ts";



const initialState = {
    projects: [],
    loading: '',
    error: null,
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setProject(state, action) {
            state.projects = action.payload
        }
    },
    extraReducers: (builder) => {
        projectsReducer(builder)
    }
})


export const {
    setProject
} = projectsSlice.actions

export default projectsSlice.reducer