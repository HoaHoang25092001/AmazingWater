import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../api"

export const getAllInvoices = createAsyncThunk("hoa-don/get-all", async (PageNumber,PageSize, { rejectWithValue }) => {
    const response = await apis.apiGetInvoices(PageNumber,PageSize)
    console.log(response.data)

    // Nếu bị lỗi thì reject
    if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
    }

    return response.data
})