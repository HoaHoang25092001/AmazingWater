import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./appSlice";
import soDocChiSoReducer from "./SoDocChiSoTheoNM/slice";
import huyChotSoReducer from "./HandleHuyChotSoPUT/slice";
import moKhoaReducer from "./HandleMoKhoa/slice";
import khoaSoReducer from "./HandleKhoaSo/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    soDocChiSo: soDocChiSoReducer,
    huyChotSo: huyChotSoReducer,
    moKhoa: moKhoaReducer,
    khoaSo: khoaSoReducer,
  },
});

export default store;
