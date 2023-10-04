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
export const soDocChiSoApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/so-doc-chi-so/get-all`);
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
