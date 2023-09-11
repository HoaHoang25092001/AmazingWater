import axios from "../axios";

export const apiLogin = () => axios({
    url: 'auth/authenticate',
    method: 'POST',
})