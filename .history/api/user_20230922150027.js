import axios from "axios";


const API_URL = "https://api-awa-dev.amazingtech.vn";

export const loginApi = async (credentials) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/auth/authenticate`,
      credentials
    );
    console.log("data", response.data);
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
