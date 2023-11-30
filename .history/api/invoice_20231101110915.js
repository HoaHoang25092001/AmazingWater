import axios from "axios";

export const apiGetInvoices = (PageNumber, PageSize) => axios({
    url: `hoa-don/get-all?PageNumber=${PageNumber}&PageSize=${PageSize}`,
    method: 'GET',
})

export const apiBillPayment = (data) => axios({
    url: 'hoa-don/tinh-tien-hoa-don',
    method: 'POST',
    data
})