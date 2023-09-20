import axios from "../axios";

export const apiLogin = (data) => axios({
    url: 'auth/authenticate',
    method: 'POST',
    data
})

export const apiForgotPassword = (data) => axios({
    url: 'auth/forgot-password',
    method: 'POST',
    data
})