import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./appSlice";
import readingRouteSlice from "../store/readingRoute/readingRouteSlice";
import invoiceSerialNumberListSlice from "../store/invoiceSerialNumberList/invoiceSerialNumberListSlice";
import invoiceSlice from "../store/invoice/invoiceSlice";
import nhaMaySlice from "../store/nhaMay/nhaMaySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    invoice: invoiceSlice,
    nhaMay: nhaMaySlice,
    readingRoute: readingRouteSlice,
    invoiceSerialNumberList: invoiceSerialNumberListSlice,
    // Add other reducers here if needed
  },
});

export default store;
