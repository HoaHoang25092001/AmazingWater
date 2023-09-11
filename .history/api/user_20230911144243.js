import axios from "../axios";

export const login = () => axios({
    url: 'auth/authenticate',
    method: 'POST',
})