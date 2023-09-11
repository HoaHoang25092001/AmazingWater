import { loginStart, loginSuccess, loginFailure } from "./authSlice";
import { loginApi } from "./api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginUser = createAsyncThunk(
  "auth/authenticate",
  async (credentials, { dispatch }) => {
    try {
      dispatch(loginStart());
      const data = await loginApi(credentials);
      dispatch(loginSuccess(data));
      // Store the token in AsyncStorage after successful login
      await AsyncStorage.setItem("username", data.token);
      console.log("token1:", data.token);
    } catch (error) {
      dispatch(loginFailure(error.message));
      console.log("Errorrrrrrrrr:", errors);
    }
  }
);
