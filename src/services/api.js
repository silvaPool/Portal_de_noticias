import axios from "axios";

const api = axios.create({
    baseURL: "https://api.gdeltproject.org/api/v2"

});

export default api;