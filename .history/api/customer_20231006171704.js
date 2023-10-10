import axios from "axios";

export const apiGetCustomers = () => axios({
    url: 'khach-hang/get-all',
    method: 'GET',
})