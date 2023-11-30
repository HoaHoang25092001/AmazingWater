import axios from "axios";

export const apiGetInvoices = (PageNumber, PageSize) => axios({
    url: 'hoa-don/get-all?PageNumber=1&PageSize=10',
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