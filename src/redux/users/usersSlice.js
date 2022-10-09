import { createSlice } from "@reduxjs/toolkit";
import { addUser, deleteUser, fetchUsers, updateUser } from "./usersOperations";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  extraReducers: {
    [fetchUsers.pending](state) {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled](state, { payload }) {
      state.users = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchUsers.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
    [deleteUser.pending](state) {
      state.isLoading = true;
    },
    [deleteUser.fulfilled](state, { payload }) {
      state.users = state.users.filter((user) => user.id !== payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteUser.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
    [addUser.pending](state) {
      state.isLoading = true;
    },
    [addUser.fulfilled](state, { payload }) {
      state.users.push(payload);
      state.isLoading = false;
      state.error = null;
    },
    [addUser.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
    [updateUser.pending](state) {
      state.isLoading = true;
    },
    [updateUser.fulfilled](state, { payload }) {
      const index = state.users.findIndex((user) => user.id === payload.id);
      state.users[index] = payload;
      state.isLoading = false;
      state.error = null;
    },
    [updateUser.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const usersReducer = usersSlice.reducer;
