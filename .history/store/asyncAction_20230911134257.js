import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from '../api'
export const login = createAsyncThunk(
    // Tên action
    'user/login',
    // Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
    async (data, { rejectWithValue }) => {
        // Gọi lên API backend
        const response = await apis.login()

        // Convert dữ liệu ra json
        const jsonData = await response.json();

        // Nếu bị lỗi thì reject
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(jsonData);
        }

        // Còn không thì trả về dữ liệu
        return jsonData;
    }
)