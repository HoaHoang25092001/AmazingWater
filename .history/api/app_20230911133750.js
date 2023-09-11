import axios from "../axios";

export const Login = () => axios({
    url: 'auth/authenticate',
    method: 'POST',
})