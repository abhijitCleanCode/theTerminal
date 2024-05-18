import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPost: []
}

const allPostSlice = createSlice({
    name: "allPost",
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.allPost = [...state.allPost, ...action.payload];
        },
    }
})

// export individually for the use of components
export const { setPost } = allPostSlice.actions;

export default allPostSlice.reducer;