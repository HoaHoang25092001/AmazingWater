import axios from "axios";

export const apiGetInvoices = () => axios({
    url: 'hoa-don/get-all',
    method: 'GET',
})

export const apiBillPayment = (data) => axios({
    url: 'hoa-don/tinh-tien-hoa-don',
    method: 'POST',
    data
})