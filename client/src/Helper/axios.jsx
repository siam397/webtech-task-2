import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const instance = axios.create({
    baseURL: "http://localhost:8080"
})

if (cookies.get("accessToken")) {
    console.log("asdssad");
    let accessToken = cookies.get("accessToken");
    instance.defaults.headers['Authorization'] = `Bearer ${accessToken}`
}

export default instance;