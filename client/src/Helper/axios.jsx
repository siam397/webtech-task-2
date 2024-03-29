import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const instance = axios.create({
    baseURL: "http://localhost:8080"
})
console.log(cookies.get("accessToken"));
if (cookies.get("accessToken")) {
    let accessToken = cookies.get("accessToken");
    instance.defaults.headers['Authorization'] = `Bearer ${accessToken}`
}

export default instance;