import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./appSlice";
import invoiceSerialNumberListSlice from "../store/invoiceSerialNumberList/invoiceSerialNumberListSlice";
import readingRouteSlice from "../store/readingRoute/readingRouteSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    readingRoute: readingRouteSlice,
    invoiceSerialNumberList: invoiceSerialNumberListSlice,
    // Add other reducers here if needed
  },
});

export default store;
