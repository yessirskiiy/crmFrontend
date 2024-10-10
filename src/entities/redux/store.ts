import {configureStore} from '@reduxjs/toolkit'
import user from '../user/model/userSlice.ts'
import projects from '../project/model/projectsSlice.ts'
import tasks from '../tasks/model/tasksSlice.ts'

export const store = configureStore({
    reducer: {
        user,
        projects,
        tasks,
    },
})

