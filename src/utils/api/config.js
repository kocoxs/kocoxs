import axios from 'axios'

const baseURL = `http://localhost:3001`

let instance = axios.create({
    baseURL
})

export default instance