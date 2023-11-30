import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as apis from "../../api"
import axios from "axios";

const API_URL = "https://api-awa-dev.amazingtech.vn";
export const getAllInvoices = createAsyncThunk("hoa-don/get-all", async ({ currentPage, listNhaMays }, { rejectWithValue }) => {
    let apiUrl = "";
    const nhaMayId = Array.isArray(listNhaMays)
        ? listNhaMays.map((nhaMay) => `nhaMays=${nhaMay}`).join("&")
        : `nhaMays=${listNhaMays}`;

    if (nhaMayId.length > 1) {
        const queryParams = [
            nhaMayId,
            `PageNumber=${currentPage}`,
            "PageSize=10",
        ].join("&");
        apiUrl = `${API_URL}/api/hoa-don/get-all?${queryParams}`;
    } else {
        apiUrl = `${API_URL}/api/hoa-don/get-all?PageNumber=${currentPage}&PageSize=10&nhaMays=${listNhaMays}`;
    }
    const response = await axios.get(apiUrl);
    console.log(response.data)
    return response.data;
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