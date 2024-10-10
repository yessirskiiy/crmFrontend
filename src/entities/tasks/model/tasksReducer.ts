import {fetchTask, fetchTasksByProject} from "./asyncActions.ts";

export const tasksFetchReducer = (builder) => {
    builder
        .addCase(fetchTasksByProject.pending, (state) => {
            state.loading = 'loading';
            state.error = null;
        })
        .addCase(fetchTasksByProject.fulfilled, (state, action) => {
            state.loading = 'success';
            state.tasks = action.payload;
        })
        .addCase(fetchTasksByProject.rejected, (state, action) => {
            state.loading = 'error';
            state.error = action.payload;
        });
};


export const taskGetReducer = (builder) => {
    builder
        .addCase(fetchTask.pending, (state) => {
            state.loading = 'loading';
            state.error = null;
        })
        .addCase(fetchTask.fulfilled, (state, action) => {
            state.loading = 'success';
            state.selectedTask = action.payload;
        })
        .addCase(fetchTask.rejected, (state, action) => {
            state.loading = 'error';
            state.error = action.payload;
        });
};