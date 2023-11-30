import { createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncAction'

export const invoiceSlice = createSlice({
    name: 'hoa-don',
    initialState: {
        invoices: [],
        invoice: null,
        soThanhToan:[],
        soThanhToanBySoDoc: [],
        errMessage: '',
    },
    reducers: {
        logout: (state) => {
            state.name = null;
            state.token = null;
            state.noti = "Đăng xuất thành công";
        },
    },
    extraReducers: (builder) => {
        // Bắt đầu thực hiện action (Promise pending)
        builder.addCase(actions.getAllInvoices.pending, (state) => {
            // Bật trạng thái loading
            state.isLoading = true;
        });

        // Khi thực hiện action thành công (Promise fulfilled)
        builder.addCase(actions.getAllInvoices.fulfilled, (state, action) => {
            // Tắt trạng thái loading, lưu thông tin vào store
            state.isLoading = false;
            state.invoices = action.payload;
        });

        // Khi thực hiện action thất bại (Promise rejected)
        builder.addCase(actions.getAllInvoices.rejected, (state, action) => {
            // Tắt trạng thái loading, lưu thông báo lỗi vào store
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });

        // Bắt đầu thực hiện action (Promise pending)
        builder.addCase(actions.getInvoiceById.pending, (state) => {
            // Bật trạng thái loading
            state.isLoading = true;
        });
        // Khi thực hiện action thành công (Promise fulfilled)
        builder.addCase(actions.getInvoiceById.fulfilled, (state, action) => {
            // Tắt trạng thái loading, lưu thông tin vào store
            state.isLoading = false;
            state.invoice = action.payload;
        });
        // Khi thực hiện action thất bại (Promise rejected)
        builder.addCase(actions.getInvoiceById.rejected, (state, action) => {
            // Tắt trạng thái loading, lưu thông báo lỗi vào store
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });

        // Bắt đầu thực hiện action (Promise pending)
        builder.addCase(actions.getAllSoThanhToan.pending, (state) => {
            // Bật trạng thái loading
            state.isLoading = true;
        });
        // Khi thực hiện action thành công (Promise fulfilled)
        builder.addCase(actions.getAllSoThanhToan.fulfilled, (state, action) => {
            // Tắt trạng thái loading, lưu thông tin vào store
            state.isLoading = false;
            state.soThanhToan = action.payload;
        });
        // Khi thực hiện action thất bại (Promise rejected)
        builder.addCase(actions.getAllSoThanhToan.rejected, (state, action) => {
            // Tắt trạng thái loading, lưu thông báo lỗi vào store
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });

        // Bắt đầu thực hiện action (Promise pending)
        builder.addCase(actions.getAllSoThanhToanBySoDoc.pending, (state) => {
            // Bật trạng thái loading
            state.isLoading = true;
        });
        // Khi thực hiện action thành công (Promise fulfilled)
        builder.addCase(actions.getAllSoThanhToanBySoDoc.fulfilled, (state, action) => {
            // Tắt trạng thái loading, lưu thông tin vào store
            state.isLoading = false;
            state.soThanhToanBySoDoc = action.payload;
        });
        // Khi thực hiện action thất bại (Promise rejected)
        builder.addCase(actions.getAllSoThanhToanBySoDoc.rejected, (state, action) => {
            // Tắt trạng thái loading, lưu thông báo lỗi vào store
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });
    }
})

export const { logout } = invoiceSlice.actions;
export default invoiceSlice.reducer;