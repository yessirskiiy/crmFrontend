import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProjects = createAsyncThunk(
    'projects/fetch',
    async () => {
        const {data} = await axios.get('http://localhost/v1/projects')

        return data.data
    }
)