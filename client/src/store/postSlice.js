import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postData: [],
    currentPage: 1,
    totalPage: 0
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getPost: (state, action) => {
            state.postData = action.payload;
        },
        setTotalPage: (state, action) => {
            state.totalPage = action.payload;
        },
        fetchNextPage: (state, action) => {
            let pageNum = state.currentPage;

            if (pageNum === state.totalPage) {
                pageNum = 1;
            } else {
                pageNum += 1;
            }

            state.currentPage = pageNum;
        },
        fetchPrevPage: (state, action) => {
            let pageNum = state.currentPage;

            if (pageNum === 1 ) {
                pageNum = 1;
            } else {
                pageNum -= 1;
            }

            state.currentPage = pageNum;
        }
    }
})

export const { getPost, setTotalPage, fetchNextPage, fetchPrevPage } = postSlice.actions;

export default postSlice.reducer;