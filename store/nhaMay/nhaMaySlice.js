import { createSlice } from '@reduxjs/toolkit';

const nhaMaySlice = createSlice({
  name: 'nhamay',
  initialState: {
    listNhaMays: [],
    errMessage: '',
  },
  reducers: {
    addNhaMay: (state, action) => {
      state.listNhaMays = action.payload;
    },
  },
});

export const { addNhaMay } = nhaMaySlice.actions;
export default nhaMaySlice.reducer;