import axios from "../axios";
const API_URL = "https://api-awa-dev.amazingtech.vn";

export const apiGetInvoices = () => axios({
    url: 'hoa-don/get-all?PageNumber=1&PageSize=10&nhaMays=150c6260792947bd82f9c90dc2d9ce30',
    method: 'GET',
})

export const apiGetInvoiceById = (id) => axios({
    url: `hoa-don/get-single/${id}`,
    method: 'GET',
})

// export const apiBillPayment = (data) => axios({
//     url: 'hoa-don/tinh-tien-hoa-don',
//     method: 'POST',
//     data
// })

export const apiBillPayment = async (data) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/hoa-don/tinh-tien-hoa-don`,
        data
      );
      console.log("Filtered data", response.data);
      return response.data;
    } catch (error) {
      console.log("Filtered data error", error.response.data);
      throw error.response.data;
    }
  };

export const apiAddInvoice = (data) => axios({
    url: 'hoa-don/tinh-tien-hoa-don',
    method: 'POST',
    data
})

export const apiUpdateInvoice = (data) => axios({
    url: 'hoa-don/tinh-tien-hoa-don',
    method: 'POST',
    data
})

export const apiDeleteInvoice = (data) => axios({
    url: 'hoa-don/tinh-tien-hoa-don',
    method: 'DELETE',
    data
})
