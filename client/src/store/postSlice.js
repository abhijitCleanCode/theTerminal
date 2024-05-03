import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postData: null
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getPost: (state, action) => {
            state.postData = action.payload.postData;
        }
    }
})

export const { getPost } = postSlice.actions;

export default postSlice.reducer;