import { createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncAction'

export const invoiceSerialNumberListSlice = createSlice({
    name: 'danh-muc-seri-hoa-don',
    initialState: {
        invoiceSerialNumberLists: null,
        errMessage: ''
    },
    reducers: {
        logout: (state) => {
            state.name = null;
            state.token = null;
            state.noti = "Đăng xuất thành công";
        },
    },
    extraReducers: (builder) => {
        // Bắt đầu thực hiện action login (Promise pending)
        builder.addCase(actions.getAllInvoiceSerialNumberLists.pending, (state) => {
            // Bật trạng thái loading
            state.isLoading = true;
        });

        // Khi thực hiện action login thành công (Promise fulfilled)
        builder.addCase(actions.getAllInvoiceSerialNumberLists.fulfilled, (state, action) => {
            // Tắt trạng thái loading, lưu thông tin user vào store
            state.isLoading = false;
            state.invoiceSerialNumberLists = action.payload;
        });

        // Khi thực hiện action login thất bại (Promise rejected)
        builder.addCase(actions.getAllInvoiceSerialNumberLists.rejected, (state, action) => {
            // Tắt trạng thái loading, lưu thông báo lỗi vào store
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });
    }
})
export const {logout } = invoiceSerialNumberListSlice.actions;
export default invoiceSerialNumberListSlice.reducer;