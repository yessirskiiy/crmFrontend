import {fetchProjects} from "./asyncActions.ts";

export const projectsReducer = (builder) => {
    builder
        .addCase(fetchProjects.pending, (state) => {
            state.loading = 'loading';
            state.error = null;
        })
        .addCase(fetchProjects.fulfilled, (state, action) => {
            state.loading = 'success';
            state.projects = action.payload;
        })
        .addCase(fetchProjects.rejected, (state, action) => {
            state.loading = 'error';
            state.error = action.payload;
        });
};