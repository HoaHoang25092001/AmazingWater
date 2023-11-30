import { createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncAction'

export const invoiceSlice = createSlice({
    name: 'hoa-don',
    initialState: {
        invoices: null,
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
        // Khi thực hiện action login thành công (Promise fulfilled)
        builder.addCase(actions.getAllInvoices.fulfilled, (state, action) => {
            // Tắt trạng thái loading, lưu thông tin user vào store
            state.invoices = action.payload;
        });
    }
})

export const {logout } = invoiceSlice.actions;
export default invoiceSlice.reducer;