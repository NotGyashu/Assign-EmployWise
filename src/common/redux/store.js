// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"
import usersReducer from "../slices/usersSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
});
