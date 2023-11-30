import { createSlice } from '@reduxjs/toolkit';

const nhaMaySlice = createSlice({
  name: 'nhamay',
  listNhaMays: [],
  reducers: {
    addNhaMay: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addNhaMay } = nhaMaySlice.actions;
export default nhaMaySlice.reducer;