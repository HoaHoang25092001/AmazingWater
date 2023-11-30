import axios from "../axios";


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

export const apiGetAllSoThanhToan = () => axios({
    url: 'so-doc-chi-so/get-all-so-thanh-toan?nhaMayIds=150c6260792947bd82f9c90dc2d9ce30&pageNumber=1&pageSize=10',
    method: 'GET',
    data
})