import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './features/posts/usersSlice'

export default configureStore({
    reducer: {
        posts: usersReducer,
    }
})