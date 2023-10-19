import axios from "../axios";

export const apiLogin = (data) => axios({
    url: 'auth/authenticate',
    method: 'POST',
    data
})