import { createSlice } from "@reduxjs/toolkit";
import { getAllCustomers } from './asyncAction'

export const customerSlice = createSlice({
    name: 'khach-hang',
    initialState: {
        customers: null,
        errMessage: ''
    },
    reducers: {

    },
    extraReducers: (builder) => {
        // Bắt đầu thực hiện action login (Promise pending)
        builder.addCase(getAllCustomers.pending, (state) => {
            // Bật trạng thái loading
            state.isLoading = true;
        });

        // Khi thực hiện action login thành công (Promise fulfilled)
        builder.addCase(getAllCustomers.fulfilled, (state, action) => {
            // Tắt trạng thái loading, lưu thông tin user vào store
            state.isLoading = false;
            state.customers = action.payload;
        });

        // Khi thực hiện action login thất bại (Promise rejected)
        builder.addCase(getAllCustomers.rejected, (state, action) => {
            // Tắt trạng thái loading, lưu thông báo lỗi vào store
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });
    }
})

export default customerSlice.reducer;