import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginApi } from "../api/user";
import { loginSuccess, loginStart, loginFailure, logout } from "./appSlice";
import * as apis from "../api"

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
export const logoutUser = () => (dispatch) => {
    dispatch(logout());

    console.log("logged out");
};

export const getAllCustomers = createAsyncThunk("khach-hang/get-all", async (data, { rejectWithValue }) => {
    const respone = await apis.getAllCustomers()
    console.log(respone)

    // Nếu bị lỗi thì reject
    if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(respone);
    }

    return response
})