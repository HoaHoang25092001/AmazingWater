import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api-awa-dev.amazingtech.vn";
export const fetchSoDocChiSoByNhaMayId = createAsyncThunk(
  "soDocChiSo/fetchSoDocChiSoByNhaMayId",
  async ({ service, currentPage }) => {
    let apiUrl = "";
    const nhaMayIdParams = Array.isArray(service)
      ? service.map((nhaMayId) => `nhaMayIds=${nhaMayId}`).join("&")
      : `nhaMayIds=${service}`;
    if (nhaMayIdParams.length > 1) {
      const queryParams = [
        nhaMayIdParams,
        `pageNumber=${currentPage}`,
        "pageSize=10",
      ].join("&");
      apiUrl = `${API_URL}/api/so-doc-chi-so/get-so-doc-chi-so-by-nha-may-id?${queryParams}`;
    } else {
      apiUrl = `${API_URL}/api/so-doc-chi-so/get-so-doc-chi-so-by-nha-may-id?nhaMayIds=${service}&pageNumber=${currentPage}&pageSize=10`;
    }
    const response = await axios.get(apiUrl);
    return response.data.data;
  }
);
