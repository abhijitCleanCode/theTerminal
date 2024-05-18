import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice.js";
import postSlice from "./postSlice.js";
import allPostSlice from "./allPostSlice.js";

const store = configureStore({
    reducer: {
        auth: authSlice,
        post: postSlice,
        allPost: allPostSlice
    }
})

export default store;