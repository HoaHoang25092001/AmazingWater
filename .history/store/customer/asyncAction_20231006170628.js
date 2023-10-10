import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../api"

export const getAllCustomers = createAsyncThunk("khach-hang/get-all", async (data, { rejectWithValue }) => {
    const respone = await apis.getAllCustomers()
    console.log(respone)

    // Nếu bị lỗi thì reject
    if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(respone);
    }

    return response
})