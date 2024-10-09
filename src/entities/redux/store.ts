import { configureStore } from '@reduxjs/toolkit'
import user from '../user/model/userSlice.ts'
export const store = configureStore({
    reducer: {
        user,
    },
})

