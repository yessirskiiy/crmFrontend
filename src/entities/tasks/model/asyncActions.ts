import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasksByProject = createAsyncThunk(
    'tasks/fetchByProject',
    async ({Code} : any) => {
        const {data} = await axios.get(`http://localhost/v1/projects/${Code}/tasks`)

        return data.data
    }
)


export const fetchTask = createAsyncThunk(
    'tasks/fetchTask',
    async ({Code, TaskId}) => {
        const {data} = await axios.get(`http://localhost/v1/projects/${Code}/tasks/${TaskId}`)

        return data.data
    }
)