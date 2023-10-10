import axios from "axios";

export const apiGetCustomers = (data) => axios({
    url: 'khach-hang/get-all',
    method: 'GET',
    data
})