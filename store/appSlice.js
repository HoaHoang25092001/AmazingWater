import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncAction'

export const userSlice = createSlice({
    name: 'user',
    // Thêm 1 số state như trạng thái loading, báo lỗi và thông tin user đang đăng nhập
    initialState: {
        isLoading: false,
        errorMessage: '',
        currentUser: null,
    },
    // Các action bình thường (sync action)
    reducers: {
        // Logout không gọi API mà chỉ đơn giản là cập nhật state
        logout: (state) => {
            state.currentUser = null;
            state.errorMessage = '';
        },
    },
    // Code logic xử lý async action
    extraReducers: (builder) => {
        // Bắt đầu thực hiện action login (Promise pending)
        // builder.addCase(login.pending, (state) => {
        //     // Bật trạng thái loading
        //     state.isLoading = true;
        // });

        // Khi thực hiện action login thành công (Promise fulfilled)
        builder.addCase(actions.login.fulfilled, (state, action) => {
            // Tắt trạng thái loading, lưu thông tin user vào store
            state.isLoading = false;
            state.currentUser = action.payload;
        });

        // Khi thực hiện action login thất bại (Promise rejected)
        builder.addCase(login.rejected, (state, action) => {
            // Tắt trạng thái loading, lưu thông báo lỗi vào store
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });
    },
})

// Action creators are generated for each case reducer function
export const {  } = userSlice.actions

export default userSlice.reducer