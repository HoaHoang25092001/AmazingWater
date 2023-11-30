import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../api"

export const getAllInvoices = createAsyncThunk("hoa-don/get-all", async (data, { rejectWithValue }) => {
    const response = await apis.apiGetInvoices()
    console.log(response.data)

    // Nếu bị lỗi thì reject
    if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
    }

    return response.data.items
})

export const getInvoiceById = createAsyncThunk("hoa-don/get-single", async (id, { rejectWithValue }) => {
    const response = await apis.apiGetInvoiceById(id)
    console.log(response.data)

    // Nếu bị lỗi thì reject
    if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
    }

    return response.data
})