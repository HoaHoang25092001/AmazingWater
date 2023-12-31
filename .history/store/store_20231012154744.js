import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./appSlice";
// import readingRouteSlice from "../store/readingRoute/readingRouteSlice";
// import invoiceSerialNumberListSlice from "../store/invoiceSerialNumberList/invoiceSerialNumberListSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    invoiceSerialNumberList: invoiceSerialNumberListSlice,
    // Add other reducers here if needed
  },
});

export default store;
