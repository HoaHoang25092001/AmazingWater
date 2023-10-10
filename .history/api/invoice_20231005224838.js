import axios from "axios";

export const apiGetInvoices = (data) => axios({
    url: 'hoa-don/get-all',
    method: 'GET',
    data
})

export const apiBillPayment = (data) => axios({
    url: 'hoa-don/tinh-tien-hoa-don',
    method: 'POST',
    data
})