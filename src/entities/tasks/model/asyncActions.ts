import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasksByProject = createAsyncThunk(
    'tasks/fetchByProject',
    async ({Code}) => {
        const response = await axios.get(`http://localhost/v1/projects/${Code}/tasks`)
        return response.data.data
    }
)


export const fetchTask = createAsyncThunk(
    'tasks/fetchTask',
    async ({Code, TaskId}) => {
        const {data} = await axios.get(`http://localhost/v1/projects/${Code}/tasks/${TaskId}`)

        return data.data
    }
)

export const createTask = createAsyncThunk(
    'tasks/createTask',
    async ({Code, newTask}) => {
        const createTask = {
            ...newTask,
            assigned_to: 1,
            Status: 'open',
            time_spent: 0,
            comments: [],
            project_id: 1,

        }





        const {data} = await axios.post(`http://localhost/v1/projects/${Code}/tasks`, {
            ...createTask
        })

        return data
    }

)


export const addComment = createAsyncThunk(
    'tasks/addComment',
    async ({author, text, timestamp, TaskId, Code, comments}) => {
        const newComment = {
            author,
            text,
            timestamp: new Date().toISOString()
        }

        const updatedComments = [...comments, newComment];

        const {data} = await axios.put(`http://localhost/v1/projects/${Code}/tasks/${TaskId}`, {
            comments: updatedComments
        })

        return { comments: updatedComments };
    }
)


export const deleteComment = createAsyncThunk(
    'tasks/deleteComment',
    async ({index, TaskId, Code, comments}) => {

        const updatedComments = comments.filter((_, idx) => idx !== index)

        const {data} = await axios.put(`http://localhost/v1/projects/${Code}/tasks/${TaskId}`, {
            comments: updatedComments
        })

        return {comments: updatedComments}
    }
)


