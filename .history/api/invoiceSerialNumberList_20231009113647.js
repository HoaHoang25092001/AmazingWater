import axios from "../axios";

export const apiGetInvoiceSerialNumberList = () => axios({
    url: 'danh-muc-seri-hoa-don/get-all',
    method: 'GET',
})