import _api from './config.js'

export default async function getAllProducts () {
    try {
        const response = await _api.get(`/tips`)
        return response.data
    } catch (error) {
        throw new Error('No estas logeado') 
    }
}