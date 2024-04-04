import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get('token')

const instance = axios.create({
    baseURL: "/api",
    headers: {
        "Authorization": `bearer ${token!}`
    }
})

export default instance