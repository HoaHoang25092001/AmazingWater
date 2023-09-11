import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginApi } from "../api/user";
import { loginSuccess, loginStart, loginFailure } from "./appSlice";

export const loginUser = createAsyncThunk(
  "auth/authenticate",
  async (credentials, { dispatch }) => {
    try {
      dispatch(loginStart());
      const data = await loginApi(credentials);
      dispatch(loginSuccess(data));
      // Store the token in AsyncStorage after successful login
      await AsyncStorage.setItem("username", data.token);
    } catch (error) {
      console.log("Errorrrrrrrrr:", error.Message);
      dispatch(loginFailure(error.Message));
    }
  }
);
