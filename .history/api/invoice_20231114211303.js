import axios from "../axios";


export const apiGetInvoices = () => axios({
    url: 'hoa-don/get-all?PageNumber=1&PageSize=10&nhaMays=31b9862347e14cd884f15e27b3fc0ffa',
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
