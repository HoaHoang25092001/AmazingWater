import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from '../api'

export const login = createAsyncThunk(
    // Tên action
    'user/login',
    // Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
    async (data, { rejectWithValue }) => {
        // Gọi lên API backend
        const response = await apis.apiLogin()
        console.log(response)

        // Nếu bị lỗi thì reject
        if (!response.success) {
            return rejectWithValue(response);
        }

        // Còn không thì trả về dữ liệu
        return response;
    }
)