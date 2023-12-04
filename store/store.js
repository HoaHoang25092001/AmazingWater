import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./appSlice";
import soDocChiSoReducer from "./SoDocChiSoTheoNM/slice";
import huyChotSoReducer from "./HandleHuyChotSoPUT/slice";
import moKhoaReducer from "./HandleMoKhoa/slice";
import khoaSoReducer from "./HandleKhoaSo/slice";
import chiSoDongHoReducer from "./ChiSoDongHo/slice";
import createNewSoDocReducer from "./CreateNewSoDoc/slice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    soDocChiSo: soDocChiSoReducer,
    huyChotSo: huyChotSoReducer,
    moKhoa: moKhoaReducer,
    khoaSo: khoaSoReducer,
    chiSoDongHo: chiSoDongHoReducer,
    createNewSoDoc: createNewSoDocReducer,
  },
});

export default store;
