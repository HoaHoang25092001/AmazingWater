import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const API_URL = "https://api-awa-dev.amazingtech.vn";

export const loginApi = async (credentials) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/auth/authenticate`,
      credentials
    );
    console.log("dat1a", response.data);
    await AsyncStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.log("data error", error.response.data);
    throw error.response.data;
  }
};

export const apiForgotPassword = (data) => axios({
  url: 'auth/forgot-password',
  method: 'POST',
  data
})

export const apiResetPassword = (data) => axios({
  url: 'auth/reset-password',
  method: 'POST',
  data
})

export const soDocChiSoApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/so-doc-chi-so/get-all`);
    return response.data;
  } catch (error) {
    console.log("data error", error.response.data);
    throw error.response.data;
  }
};
export const soDocChiSoTheoNMApi = async (nhaMayId) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/so-doc-chi-so/get-so-doc-chi-so-by-nha-may-id?nhaMayId=${nhaMayId}`
    );
    console.log("Data get theo nha may id:", response.data);
    return response.data;
  } catch (error) {
    console.log("data error", error.response.data);
    throw error.response.data;
  }
};

export const filterSoDocApi = async (filterParams) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/so-doc-chi-so/filter`,
      filterParams
    );
    console.log("Filtered data", response.data);
    return response.data;
  } catch (error) {
    console.log("Filtered data error", error.response.data);
    throw error.response.data;
  }
};
export const tuyenDocAllApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/tuyen-doc/get-all`);
    return response.data;
  } catch (error) {
    console.log("data error", error.response.data);
    throw error.response.data;
  }
};
export const khuVucAllApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/khu-vuc/get-all`);
    return response.data;
  } catch (error) {
    console.log("data error", error.response.data);
    throw error.response.data;
  }
};
