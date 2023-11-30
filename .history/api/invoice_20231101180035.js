import axios from "axios";
const API_URL = "https://api-awa-dev.amazingtech.vn";


export const apiGetInvoices = () => axios({
    url: `hoa-don/get-all?PageNumber=1&PageSize=10`,
    method: 'GET',
})

export const apiBillPayment = (data) => axios({
    url: 'hoa-don/tinh-tien-hoa-don',
    method: 'POST',
    data
})

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

// export const apiGetInvoices = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/api/hoa-don/get-all?PageNumber=1&PageSize=10`);
//       return response.data;
//     } catch (error) {
//       console.log("data error", error.response.data);
//       throw error.response.data;
//     }
//   };