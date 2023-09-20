import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: null,
    token: null,
    isLoading: false,
    error: null,
    noti: null,
    nhaMays: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.nhaMays = action.payload.nhaMays;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.name = null;
      state.token = null;
      state.noti = "Đăng xuất thành công";
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
