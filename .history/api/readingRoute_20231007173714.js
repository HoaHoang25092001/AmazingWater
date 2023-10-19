import axios from "../axios";

export const apiGetReadingRoutes = () => axios({
    url: 'tuyen-doc/get-all',
    method: 'GET',
})