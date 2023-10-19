import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./appSlice";
import readingRouteSlice from "../store/readingRoute/readingRouteSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    readingRoute: readingRouteSlice
    // Add other reducers here if needed
  },
});

export default store;
