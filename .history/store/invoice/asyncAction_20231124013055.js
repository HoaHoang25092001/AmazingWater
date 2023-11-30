import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../api"

export const getAllInvoices = createAsyncThunk("hoa-don/get-all", async (currentPage, { rejectWithValue }) => {
    const response = await apis.apiGetInvoices(currentPage)
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

export const getInvoiceForUpdateById = createAsyncThunk("hoa-don/get-hoa-don-for-update", async (id, { rejectWithValue }) => {
    const response = await apis.apiGetInvoiceForUpdateById(id)
    console.log(response.data)

    // Nếu bị lỗi thì reject
    if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
    }

    return response.data
})

export const getAllSoThanhToan = createAsyncThunk("so-doc-chi-so/get-all-so-thanh-toan", async (data, { rejectWithValue }) => {
    const response = await apis.apiGetAllSoThanhToan()
    console.log(response.data)

    // Nếu bị lỗi thì reject
    if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
    }

    return response.data.items
})

export const getAllSoThanhToanBySoDoc = createAsyncThunk("hoa-don/get-all-so-thanh-toan", async (data, { rejectWithValue }) => {
    const response = await apis.apiGetAllSoThanhToanBySoDoc()
    console.log(response.data)

    // Nếu bị lỗi thì reject
    if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
    }

    return response.data.items
})