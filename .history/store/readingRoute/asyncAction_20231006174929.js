import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../api"

export const getAllReadingRoutes = createAsyncThunk("tuyen-doc/get-all", async (data, { rejectWithValue }) => {
    const response = await apis.apiGetReadingRoutes()
    console.log(response)

    // Nếu bị lỗi thì reject
    if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
    }

    return response
})