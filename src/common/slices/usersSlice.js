// src/slices/usersSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (page, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    const response = await axios.get(`https://reqres.in/api/users?page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    totalPages: 1,
    loading: false,
    error: null,
  },
  reducers: {
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
