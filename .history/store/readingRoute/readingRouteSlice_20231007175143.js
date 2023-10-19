import { createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncAction'

export const readingRouteSlice = createSlice({
    name: 'tuyen-doc',
    initialState: {
        readingRoutes: null,
        errMessage: ''
    },
    reducers: {

    },
    extraReducers: (builder) => {
        // Bắt đầu thực hiện action login (Promise pending)
        builder.addCase(actions.getAllReadingRoutes.pending, (state) => {
            // Bật trạng thái loading
            state.isLoading = true;
        });

        // Khi thực hiện action login thành công (Promise fulfilled)
        builder.addCase(actions.getAllReadingRoutes.fulfilled, (state, action) => {
            // Tắt trạng thái loading, lưu thông tin user vào store
            state.isLoading = false;
            state.readingRoutes = action.payload.data;
        });

        // Khi thực hiện action login thất bại (Promise rejected)
        builder.addCase(actions.getAllReadingRoutes.rejected, (state, action) => {
            // Tắt trạng thái loading, lưu thông báo lỗi vào store
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });
    }
})
export const { } = readingRouteSlice.actions;
export default readingRouteSlice.reducer;