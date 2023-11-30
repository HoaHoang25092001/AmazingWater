import { createSlice } from '@reduxjs/toolkit';

const nhaMaySlice = createSlice({
  name: 'nhamay',
  nhaMays: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTodo } = nhaMaySlice.actions;
export default nhaMaySlice.reducer;