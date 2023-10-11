import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as apis from "../api"
import { loginApi, soDocChiSoApi } from "../api/user";
import {
  loginSuccess,
  loginStart,
  loginFailure,
  logout,
  sodocStart,
  sodocSuccess,
  sodocFailure,
} from "./appSlice";
import { useSelector } from "react-redux";


export const loginUser = createAsyncThunk(
    "auth/authenticate",
    async (credentials, { dispatch }) => {
        try {
            dispatch(loginStart());
            const data = await loginApi(credentials);
            dispatch(loginSuccess(data));
            // Store the token in AsyncStorage after successful login
            console.log("respone data", data.username);
            await AsyncStorage.setItem("username", data.username);
        } catch (error) {
            console.log("Errorrrrrrrrr:", error.Message);
            dispatch(loginFailure(error.Message));
        }
    }
);
export const soDocChiSo = createAsyncThunk(
  "so-doc-chi-so/get-all",
  async ({ dispatch }) => {
    try {
      dispatch(sodocStart());
      const data = await soDocChiSoApi();
      dispatch(sodocSuccess(data));
      // Store the token in AsyncStorage after successful login
      console.log("respone data so doc chi so", data.tenSo);
    } catch (error) {
      console.log("Error so doc chi so:", error.Message);
      dispatch(sodocFailure(error.Message));
    }
  }
);
export const logoutUser = () => (dispatch) => {
    dispatch(logout());

    console.log("logged out");
};