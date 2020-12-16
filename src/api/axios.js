import axios from "axios";

// Base url to make request to windy
const instance = axios.create({
    baseURL: "",
})

export default instance;