import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./appSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here if needed
  },
});

export default store;
