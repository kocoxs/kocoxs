import axios from 'axios'

const baseURL = `http://localhost:3001`

let instance = axios.create({
    baseURL
})

instance.interceptors.response.use(response => {
    return response;
 }, (error) => {
    if (error.response.status === 401) {
        return Promise.reject("401");
    }
    return error;
 });

export default instance