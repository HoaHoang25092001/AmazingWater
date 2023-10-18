import { createSlice } from "@reduxjs/toolkit";
import { getAllInvoices } from './asyncAction'

export const invoiceSlice = createSlice({
    name: 'hoa-don',
    initialState: {
        invoices: null,
        errMessage: ''
    },
    reducers: {

    },
    extraReducers: (builder) => {
        // Bắt đầu thực hiện action login (Promise pending)
        builder.addCase(getAllInvoices.pending, (state) => {
            // Bật trạng thái loading
            state.isLoading = true;
        });

        // Khi thực hiện action login thành công (Promise fulfilled)
        builder.addCase(getAllInvoices.fulfilled, (state, action) => {
            // Tắt trạng thái loading, lưu thông tin user vào store
            state.isLoading = false;
            state.customers = action.payload;
        });

        // Khi thực hiện action login thất bại (Promise rejected)
        builder.addCase(getAllInvoices.rejected, (state, action) => {
            // Tắt trạng thái loading, lưu thông báo lỗi vào store
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });
    }
})

export default customerSlice.reducer;